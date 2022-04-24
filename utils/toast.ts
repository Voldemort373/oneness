import { useColorMode } from "@chakra-ui/react";
import { useCallback } from "react";
import { TypeOptions, Id, toast } from "react-toastify";
import Toast from "../components/organisms/toast";

/**
 * @dev Interface for showToast function exported from below hook
 */
interface ShowToast {
    toastElement: typeof Toast;
    type?: TypeOptions;
    autoCloseInSecs?: number;
    toastId?: Id;
}

/**
 * @dev Interface for showSimpleToast function exported from below hook
 */
 interface ShowSimpleToast {
    text: string;
    type?: TypeOptions;
    autoCloseInSecs?: number;
    toastId?: Id;
}

/**
 * @dev Hook for showing Toasts with above component
 * @returns `showToast` Function to show a toast
 */
export const useToast = () => {
    const { colorMode } = useColorMode();

    /**
     * @summary Invoke to show toast
     * @param toastElement Custom toast component
     * @param autoCloseInSecs Duration (secs) while toast should show; *default: `4`*
     * @param toastId ID of the toast; *(OPTIONAL)*
     * @param type Type of the toast: `info`, `error`, `success`, `warn`, `default`; *(OPTIONAL)*; *default: `default`*
     * @example showToast(<Toast title="Done" />, { type: "success" })
     */
    const showToast = useCallback(({ toastElement, autoCloseInSecs = 4, toastId, type = "default" }: ShowToast) => {
        toast(toastElement, {
            autoClose: autoCloseInSecs * 1000,
            toastId,
            type,
            theme: colorMode,
            position: "bottom-right"
        });
    }, [colorMode]);

    /**
     * @summary Invoke to show toast
     * @param toastElement Custom toast component
     * @param autoCloseInSecs Duration (secs) while toast should show; *default: `4`*
     * @param toastId ID of the toast; *(OPTIONAL)*
     * @param type Type of the toast: `info`, `error`, `success`, `warn`, `default`; *(OPTIONAL)*; *default: `default`*
     * @example showToast(<Toast title="Done" />, { type: "success" })
     */
    const showSimpleToast = useCallback(({ text, autoCloseInSecs = 4, toastId, type = "default" }: ShowSimpleToast) => {
        toast(text, {
            autoClose: autoCloseInSecs * 1000,
            toastId,
            type,
            theme: colorMode,
            position: "bottom-right"
        });
    }, [colorMode]);

    return {
        showToast,
        showSimpleToast
    }
}