import { configureStore } from "@reduxjs/toolkit";
import { connectionReducer } from "./reducers/connection";
import { navbarReducer } from "./reducers/navbar";

/**
 * @dev Root store for the entire app
 */
export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        connection: connectionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ["connection.selfId"],
            ignoredActions: ["connection/setSelfId"]
        }
    })
});

/**
 * @dev RootState type for the entire app
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * @dev State dispatch type for the entire app
 */
export type AppDispatch = typeof store.dispatch;