import { Box, Heading, Text } from "@chakra-ui/react";
import { ToastContentProps } from "react-toastify";
import Image from "next/image";

export interface ToastProps extends ToastContentProps {
    title?: string;
    description?: string;
    leftImage?: string;
}

/**
 * @summary Custom toast component for React-toastify
 */
export default function Toast({ title, toastProps, closeToast, data, description, leftImage }: ToastProps) {

    return (
        <Box display="flex" alignItems="center" gap="4">
            {/* Left image */}
            {!!leftImage &&
                <Box height="2rem" width="2rem" position="relative" borderRadius="50%" overflow="hidden">
                    <Image src={leftImage} alt={title} layout="fill" objectFit="cover" objectPosition="center center" />
                </Box>
            }

            {/* Content */}
            <Box>
                {!!title && <Heading fontSize="md" fontWeight="600">{title}</Heading>}
                {!!description && <Text marginTop="4">{description}</Text>}
            </Box>

        </Box>
    )
}

