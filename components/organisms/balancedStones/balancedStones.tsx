import { Box, BoxProps } from "@chakra-ui/react";
import BalancedStonesOutline from "./BalancedStonesOutline";
import Vivus from "vivus";
import React from "react";

function BalancedStonesUnmemo(props: BoxProps) {
    return (
        <Box {...props} width="80vw" overflow="hidden" maxWidth="600px">
            <BalancedStonesOutline ref={(el) => {
                const outlineAnim = new Vivus(el as unknown as HTMLElement, {
                    duration: 200
                });
            }} />
        </Box>
    )
}

const BalancedStones = React.memo(BalancedStonesUnmemo);
export default BalancedStones;