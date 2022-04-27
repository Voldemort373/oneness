import { Box, BoxProps } from "@chakra-ui/react";
import BalancedStonesOutline from "./BalancedStonesOutline";
import Vivus from "vivus";
import React, { useEffect, useRef } from "react";

function BalancedStonesUnmemo(props: BoxProps) {

    /**
     * @dev Start animating the SVG outlines upon render
    */
    const ref = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (!!ref.current) {
            console.log("Animation started!");
            new Vivus(ref.current as unknown as HTMLElement, {
                duration: 200
            });
        }
    }, [ref]);

    return (
        <Box {...props} overflow="hidden">
            <BalancedStonesOutline ref={ref} />
        </Box>
    )
}

const BalancedStones = React.memo(BalancedStonesUnmemo);
export default BalancedStones;



/**
 * const outlineAnim = new Vivus(el as unknown as HTMLElement, {
                    duration: 200
                });
 */