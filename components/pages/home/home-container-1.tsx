import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import BalancedStones from "../../organisms/balancedStones/balancedStones";


export default function HomeContainer1() {

    const headingShadow = useColorModeValue("unset", "4px 0px 8px #1a1a1a80")

    return (
        <Box as="section">

            {/* Balanced stones animated */}
            <BalancedStones position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" />

            {/* Heading */}
            <Heading fontSize={{ base: "6xl", md: "9xl" }} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textShadow={headingShadow}>
                Oneness
            </Heading>
        </Box>
    )
}