import { ToastId, useToast as useToastChakra } from "@chakra-ui/react";
import { useCallback } from "react";

type ToastStatusType = 'success' | 'error' | 'warning' | 'info';

export const useToast = () => {
    const toast = useToastChakra();

    const showToast = useCallback((
        status: ToastStatusType = "info",
        title: string,
        description?: string,
        durationInSecs: number = 4,
        id?: ToastId
    ) => {
        toast({
            title,
            description,
            duration: durationInSecs * 1000,
            status,
            position: "bottom-right",
            id,
            variant: "solid"
        })
    }, [toast]);

    return {
        showToast
    }
}