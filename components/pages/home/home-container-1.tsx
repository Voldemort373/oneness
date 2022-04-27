import { Box, Button, Heading, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import useConnection from "../../../hooks/useConnection";
import BalancedStones from "../../organisms/balancedStones/balancedStones";


export default function HomeContainer1() {

    const headingShadow = useColorModeValue("unset", "4px 0px 8px #1a1a1a80");
    const { isConnected, showConnectDialog, isConnecting } = useConnection();
    const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

    return (
        <Box as="section" display="flex" justifyContent="center" alignItems="center" height="full" flexDirection="column">

            {/* Balanced stones animated */}
            <BalancedStones width="80vw" maxWidth={{ base: "unset", md: "400px" }} position="absolute" top="50%" left="50%" transform={{ base: "translate(-50%, -50%)", md: "translate(-20%, -50%)", lg: "translate(10%, -50%)" }} />

            {/* Heading */}
            <Heading fontSize={{ base: "6xl", md: "7xl", lg: "8xl" }} textShadow={headingShadow} zIndex="2">
                Oneness
            </Heading>

            {/* CTA Buttons */}
            <Box display="flex" alignItems="center" justifyContent="center" gap="4" zIndex="2">
                {/* Read more */}
                <Link passHref href="#read-more"><a>
                    <Button size={buttonSize}>Read more</Button>
                </a></Link>

                {/* Connect / App */}
                {isConnected ?
                    <Link passHref href="/app/posts"><a>
                        <Button colorScheme="blue" size={buttonSize}>App</Button>
                    </a></Link> :

                    <Button colorScheme="blue" size={buttonSize} isLoading={isConnecting} loadingText="Connecting" onClick={showConnectDialog}>Connect</Button>
                }


            </Box>

        </Box>
    )
}