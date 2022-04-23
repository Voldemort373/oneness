import { Box, Button, Heading, IconButton, Text, Theme, useColorMode, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import { useNavbar } from "../../../hooks/useNavbar";
import { NavbarGradientShadowNoProgress, NavbarGradientShadowProgress } from "./appBarWidescreenProgress";
import { useNavbarVars } from "./useNavbarVars";
import AppIcon from "../../../icons/AppIcon";
import ConnectIcon from "../../../icons/ConnectIcon";
import useConnection from "../../../hooks/useConnection";
import DayIcon from "../../../icons/DayIcon";
import NightIcon from "../../../icons/NightIcon";
import OpenessLogoActive from "../../../icons/OpenessLogoActive";
import React from "react";

const AppBarWidescreenUnmemo = () => {

    /**
     * @dev Navbar state hook
     */
    const { navbarState } = useNavbar();

    /**
    * @dev States and effects are placed in a separate, local-only hook
    */
    const { navbarBackground, singleColorFadeAnim, colors, progressColorsGradientAnim } = useNavbarVars();

    /**
     * @dev For connection
     */
    const { disconnect, isConnecting, isConnected, showConnectDialog } = useConnection();

    /**
    * @dev To get current theme
    */
    const { colorMode, toggleColorMode } = useColorMode();

    /**
     * @dev Chakra theme
     */
    const theme: Theme = useTheme();

    return (
        <Box id="navbar-widescreen-container" width="full" position="fixed" top="0" left="0" zIndex="999">
            {       /**
                     * Navbar will have shadow (single color transition) when there's no progress.
                     * When there's progress, it'll have all 4 colors running in relay
                     */
                navbarState.progress ?
                    <NavbarGradientShadowProgress navbarBackground={navbarBackground} progressColorsGradientAnim={progressColorsGradientAnim} /> :
                    <NavbarGradientShadowNoProgress colors={colors} singleColorFadeAnim={singleColorFadeAnim} />
            }


            {/* Navbar content */}
            <Box id="navbar-widescreen" as="nav" width="full" minHeight="14" zIndex="1" backgroundColor={navbarBackground} paddingX="8" paddingY="4" display="flex" justifyContent="space-between">
                {/* Title */}
                <Link passHref href="/"><a>
                    <Heading fontSize="3xl" width="fit-content" aria-label="Oneness" role="heading" display="flex" alignItems="center" justifyContent="center" gap="0.05rem">
                        <OpenessLogoActive height="1.875rem" width="1.875rem" />
                        <Text as="span" marginTop="0.5rem" lineHeight={1}>neness</Text>
                    </Heading>
                </a></Link>

                {/* Nav content */}
                <Box display="flex" justifyContent="end" alignItems="center" gap="10">

                    {/* App */}
                    <Link passHref href="/app/posts"><a>
                        <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<AppIcon height="24" width="24" />}>App</Button>
                    </a></Link>

                    {/* Connect */}
                    <Button display="flex" alignItems="center" variant="unstyled" leftIcon={<ConnectIcon height="24" width="24" />} onClick={isConnected ? disconnect : showConnectDialog} isLoading={isConnecting} loadingText="Connecting">
                        {isConnected ? "Disconnect" : "Connect"}
                    </Button>

                    {/* Theme changer */}
                    <IconButton variant="unstyled" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} theme`} icon={colorMode === "light" ? <DayIcon height="1.75rem" width="1.75rem" /> : <NightIcon height="1.75rem" width="1.75rem" fill={theme.colors.blue[50]} />} onClick={toggleColorMode} display="flex" justifyContent="center" alignItems="center" />
                </Box>
            </Box>
        </Box>
    )
}

export const AppBarWidescreen = React.memo(AppBarWidescreenUnmemo);