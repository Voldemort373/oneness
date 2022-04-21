import { Box, Button, Heading, IconButton, Show, Text, Theme, useTheme, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { useNavbar } from "../../../hooks/useNavbar";
import { useNavbarVars } from "./useNavbarVars";
import AppIcon from "../../../icons/AppIcon";
import DayIcon from "../../../icons/DayIcon";
import NightIcon from "../../../icons/NightIcon";

export default function AppBar() {

    /**
     * @dev States and effects are placed in a separate, local-only hook
     */
    const { navbarBackground, ready, singleColorFadeAnim, colors, progressColorsGradientAnim } = useNavbarVars();

    /**
     * @dev Navbar state hook
     */
    const { navbarState } = useNavbar();

    /**
     * @dev To get current theme
     */
    const { colorMode, toggleColorMode } = useColorMode();

    /**
     * @dev Chakra theme
     */
    const theme: Theme = useTheme();

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
                    <Box id="navbar-widescreen" as="nav" width="full" minHeight="14" zIndex="1" backgroundColor={navbarBackground} padding="4" display="flex" justifyContent="space-between">
                        {/* Title */}
                        <Link passHref href="/"><a>
                            <Heading fontSize="3xl" width="fit-content">
                                <Text as="span" ref={(el) => { singleColorFadeAnim(el, "color"); }} fontSize="4xl">O</Text>
                                <Text as="span">neness</Text>
                            </Heading>
                        </a></Link>

                        {/* Nav content */}
                        <Box display="flex" justifyContent="end" alignItems="center" gap="12">
                            {/* App */}
                            <Link passHref href="/app"><a>
                                <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AppIcon height="24" width="24" />}>App</Button>
                            </a></Link>

                            {/* LogIn */}


                            {/* Theme changer */}
                            <IconButton variant="unstyled" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} theme`} icon={colorMode === "light" ? <DayIcon height="2rem" width="2rem" /> : <NightIcon height="2rem" width="2rem" fill={theme.colors.blue[50]} />} onClick={toggleColorMode} display="flex" justifyContent="center" alignItems="center" />
                        </Box>
                    </Box>
                </Box>
            </Show>

            {/* For smaller screens, md and below */}
            <Show below="sm">

            </Show>
        </>
    )
}