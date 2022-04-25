import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentContainer {
    children?: ReactNode;
}

export default function ContentContainer({ children }: ContentContainer) {
    return (
        <Box as="main" marginTop={{ base: "3.5rem", md: "4.5rem" }} height={{ base: "calc(100vh - 7rem)", md: "calc(100vh - 4.5rem)" }}>
            {children}
        </Box>
    )
}