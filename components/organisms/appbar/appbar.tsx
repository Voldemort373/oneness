import { Box, Heading, Show, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Link from "next/link";
import { useNavbar } from "../../../hooks/useNavbar";
import { useNavbarVars } from "./useNavbarVars";

export default function AppBar() {

    /**
     * @dev States and effects are placed in a separate, local-only hook
     */
    const { navbarBackground, ready, singleColorFadeAnim, colors, progressColorsGradientAnim } = useNavbarVars();

    /**
     * @dev Navbar state hook
     */
    const { navbarState, setNavbarProgress } = useNavbar();
    useEffect(() => {
        setTimeout(() => {
            setNavbarProgress(true);
        }, 3000);
    }, [setNavbarProgress])

    return !ready ? <></> : (
        <>
            {/* For widescreen, lg and above */}
            <Show above="lg">
                <Box id="navbar-widescreen-container" width="full" position="fixed" top="0" left="0" zIndex="999">
                    {/**
                     * Navbar will have shadow (single color transition) when there's no progress.
                     * When there's progress, it'll have all 4 colors running in relay
                     */
                        navbarState.progress ?
                            <Box id="navbar-widescreen-progress-gradient" height="full" width="full" position="absolute" top="-8px" left="0" zIndex="-1" filter="blur(16px)" background={navbarBackground} ref={progressColorsGradientAnim} /> :
                            <Box id="navbar-widescreen-shadow" height="full" width="full" position="absolute" top="-10px" left="0" zIndex="-1" filter="blur(16px)" ref={(el) => { singleColorFadeAnim(el, "backgroundColor"); }} backgroundColor={colors[3]} />
                    }

                    {/* Navbar content */}
                    <Box id="navbar-widescreen" as="nav" width="full" minHeight="14" zIndex="1" backgroundColor={navbarBackground} padding="4">
                        {/* Title */}
                        <Link passHref href="/"><a>
                            <Heading fontSize="3xl">
                                <Text as="span" ref={(el) => { singleColorFadeAnim(el, "color"); }} fontSize="4xl">O</Text>
                                <Text as="span">neness</Text>
                            </Heading>
                        </a></Link>
                    </Box>
                </Box>
            </Show>

            {/* For smaller screens, md and below */}
            <Show below="sm">

            </Show>
        </>
    )
}