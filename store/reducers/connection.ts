import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelfID } from "@self.id/framework";
import { WalletsSupported } from "../../types/wallet";

export type ConnectionState = {
    isConnecting: boolean;
    showConnectionDialog: boolean;
    selfId: SelfID | null;
    walletPreConnected: WalletsSupported | null | "";
}

const initialState: ConnectionState = {
    isConnecting: false,
    showConnectionDialog: false,
    selfId: null,
    walletPreConnected: null
}

const connectionStateSlice = createSlice({
    name: "connection",
    initialState,
    reducers: {
        setIsConnecting: (state, action: PayloadAction<boolean>) => {
            state.isConnecting = action.payload;
        },
        setShowConnectionModal: (state, action: PayloadAction<boolean>) => {
            state.showConnectionDialog = action.payload;
        },
        setSelfId: (state, action: PayloadAction<any>) => {
            state.selfId = action.payload;
        },
        setWalletPreConnected: (state, action: PayloadAction<WalletsSupported | null | "">) => {
            state.walletPreConnected = action.payload;
        }
    }
});

export const actionGenerators = connectionStateSlice.actions;

export const connectionReducer = connectionStateSlice.reducer;