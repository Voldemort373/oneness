import { useCallback, useEffect, useState } from "react";

const KEY_PREPEND = "oneness-app";

/**
 * @summary Provides a hook to access and manipulate local storage data, using its key name
 * @param key Keyname under which local storage data is stored
 * @param fallback Fallback value if data does not exist in local storage *(Optional)*
 * @returns `{value, setValue, isSyncedFromLocalStorage}`
 */
export const useLocalStorage = (key: string, fallback: string = "") => {
    const [valueLocalStorage, setValueLocalStorage] = useState<string>("");
    const [isSyncedFromLocalStorage, setIsSyncedFromLocalStorage] = useState<boolean>(false);

    /**
     * @dev Loads data into state after initial load
     */
    useEffect(() => {
        const loadedValue = window?.localStorage.getItem(`${KEY_PREPEND}-${key}`);
        setValueLocalStorage(typeof loadedValue === "string" ? loadedValue : fallback);
        setIsSyncedFromLocalStorage(true);
    }, [key, fallback]);

    /**
     * @summary Changes value in local storage, stored under key name provided
     * @param newValue The new value to be set
     */
    const setValue = useCallback((newValue: string) => {
        window?.localStorage.setItem(`${KEY_PREPEND}-${key}`, newValue);
        setValueLocalStorage(newValue);
    }, [key]);

    return {
        value: valueLocalStorage,
        setValue,
        isSyncedFromLocalStorage
    };
}