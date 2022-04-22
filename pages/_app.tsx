import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import AppBar from '../components/organisms/appbar';
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import { Web3ReactProvider } from "@web3-react/core";
import { providers as providersEthers } from "ethers";
import { Provider as SelfIdProvider } from "@self.id/framework";
import ConnectDialog from '../components/organisms/connectDialog';
import { getValueBasedOnEnv } from '../utils/env';

/**
 * @summary Used by Web3-React's provider to initialise its provider
 * @param provider Actual provider (unwrapped, to-be-wrapped)
 * @returns Web3Provider (wrapped with ethers.providers.Web3Provider)
 */
const getLibrary = (provider: any) => {
  const wrappedProvider = new providersEthers.Web3Provider(provider);
  return wrappedProvider;
}

function OnenessApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <SelfIdProvider client={{
          ceramic: getValueBasedOnEnv({
            local: "testnet-clay",
            development: "testnet-clay",
            production: "mainnet"
          })
        }}>
          <ChakraProvider theme={theme}>
            <AppBar />
            <Component {...pageProps} />
            <ConnectDialog />
          </ChakraProvider>
        </SelfIdProvider>
      </Web3ReactProvider>
    </ReduxProvider>
  )
}

export default OnenessApp;
