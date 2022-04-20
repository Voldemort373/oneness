import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NavbarState = {
    progress: boolean
}

const initialState: NavbarState = {
    progress: false
}

const navbarStateSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setProgress: (state, action: PayloadAction<boolean>) => {
            state.progress = action.payload;
        }
    }
});

export const actionGenerators = navbarStateSlice.actions;

export const navbarReducer = navbarStateSlice.reducer;