import { useCallback, useEffect, useMemo } from "react"
import { WalletsSupported } from "../../types/wallet"
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { getChainsBasedOnEnv, getRpcUrls } from "./chains";
import { useToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { actionGenerators as connectionActionGenerators } from "../../store/reducers/connection";
import { ethers } from "ethers";
import { useViewerConnection, EthereumAuthProvider, SelfID } from "@self.id/framework";
import { useNavbar } from "../useNavbar";

const WALLET_PRE_CONNECTED_LOCAL_STORAGE_KEY = "oneness-app-wallet-pre-connected";

export const useConnection = () => {
    const dispatch: AppDispatch = useDispatch();
    const { activate, active, deactivate, account, chainId, connector, library } = useWeb3React();
    const { showToast } = useToast();
    const [isConnecting, setIsConnecting] = [
        useSelector((state: RootState) => (state.connection.isConnecting)),
        (isConnecting: boolean) => { dispatch(connectionActionGenerators.setIsConnecting(isConnecting)) }
    ];
    const [connectDialogVisible, setShowConnectionDialog] = [
        useSelector((state: RootState) => (state.connection.showConnectionDialog)),
        (showConnectionDialog: boolean) => { dispatch(connectionActionGenerators.setShowConnectionModal(showConnectionDialog)) }
    ];
    const [selfIdConnection, selfIdConnect, selfIdDisconnect] = useViewerConnection();
    const [selfId, setSelfId] = [
        useSelector((state: RootState) => (state.connection.selfId)),
        (selfId: SelfID | null) => { dispatch(connectionActionGenerators.setSelfId(selfId)) }
    ];
    const { setNavbarProgress } = useNavbar();
    const chains = useMemo(() => (getChainsBasedOnEnv()), []);
    const [walletPreConnected, setWalletPreConnected] = [
        useSelector((state: RootState) => (state.connection.walletPreConnected)),
        (newWalletPreConnected: WalletsSupported | "" | null) => { dispatch(connectionActionGenerators.setWalletPreConnected(newWalletPreConnected)); }
    ];

    /**
     * @summary Invoke to show connec dialog
     */
    const showConnectDialog = useCallback(() => {
        setShowConnectionDialog(true);
    }, [setShowConnectionDialog]);

    /**
     * @summary Invoke to hide connect dialog
     */
    const hideConnectDialog = useCallback(() => {
        setShowConnectionDialog(false);
    }, [setShowConnectionDialog]);

    /**
     * @summary Invoke to start the connection flow
     * @param walletType Wallet type to start connection with: "injected", "metamask", "wallet-connect", "wallet-link"
     */
    const connect = useCallback(async (walletType: WalletsSupported) => {
        try {
            setIsConnecting(true);
            setNavbarProgress(true);

            // Create wallet connector
            let connector: InjectedConnector | WalletConnectConnector | WalletLinkConnector;
            const supportedChainIds = Object.keys(chains).map((chainId) => parseInt(chainId));
            let walletChosen: WalletsSupported;

            switch (walletType) {
                case "wallet-connect":
                    connector = new WalletConnectConnector({ rpc: getRpcUrls(), supportedChainIds });
                    walletChosen = "wallet-connect";
                    break;
                case "wallet-link":
                    connector = new WalletLinkConnector({ url: chains[80001].urls[0] as string, appName: 'Oneness' })
                    walletChosen = "wallet-link";
                    break;
                case "metamask":
                    walletChosen = "metamask";
                    connector = new InjectedConnector({ supportedChainIds });
                    break;
                case "injected":
                default:
                    walletChosen = "injected";
                    connector = new InjectedConnector({ supportedChainIds });
                    break;
            }

            // Authenticate via wallet
            await activate(connector, (e) => { throw new Error(e.message) });
            setShowConnectionDialog(false);
            setWalletPreConnected(walletChosen);

            // Connect with Self-ID
            const provider = await connector.getProvider();
            const signerAddr = await connector.getAccount();
            if (!!provider && !!signerAddr && signerAddr !== "") {
                const newSelfId = await selfIdConnect(new EthereumAuthProvider(provider, signerAddr));
                setSelfId(newSelfId);
            }

            // Show success toast at the end
            showToast(
                "success",
                "CONNECTED",
                "You are now connected to Oneness!"
            );
        } catch (e: any) {
            showToast("error", "ERROR", e?.message);
            setShowConnectionDialog(false);
        } finally {
            setIsConnecting(false);
            setNavbarProgress(false);
        }
    }, [activate, setIsConnecting, showToast, setNavbarProgress, chains, setShowConnectionDialog, selfIdConnect, setSelfId, setWalletPreConnected]);

    /**
     * @summary Disconnects from Oneness
     */
    const disconnect = useCallback(() => {
        setShowConnectionDialog(false);
        deactivate();
        selfIdDisconnect();
        setWalletPreConnected("");
    }, [deactivate, setShowConnectionDialog, selfIdDisconnect, setWalletPreConnected]);

    return {
        connect,
        disconnect,
        isConnected: active && selfIdConnection.status === "connected",
        isConnecting,
        chainId,
        signer: library?.getSigner() as ethers.Signer | null | undefined,
        signerAddr: account,
        providerWrapped: library as ethers.providers.Web3Provider | undefined,
        provider: connector,
        showConnectDialog,
        hideConnectDialog,
        connectDialogVisible,
        selfId
    }
}