import { Box, IconButton, Theme, useTheme, useColorMode, Menu, MenuButton, MenuList, MenuItem, MenuOptionGroup } from "@chakra-ui/react";
import Link from "next/link";
import { useNavbarVars } from "./useNavbarVars";
import DayIcon from "../../../icons/DayIcon";
import NightIcon from "../../../icons/NightIcon";
import ConnectIcon from "../../../icons/ConnectIcon";
import ExploreIcon from "../../../icons/ExploreIcon";
import ExploreIconActive from "../../../icons/ExploreIconActive";
import MessageIconActive from "../../../icons/MessageIconActive";
import MessageIcon from "../../../icons/MessageIcon";
import ProfileIcon from "../../../icons/ProfileIcon";
import ProfileIconActive from "../../../icons/ProfileIconActive";
import NotificationIcon from "../../../icons/NotificationIcon";
import NotificationIconActive from "../../../icons/NotificationIconActive";
import MenuIcon from "../../../icons/MenuIcon";
import FundWalletIconActive from "../../../icons/FundWalletIconActive";
import FundWalletIcon from "../../../icons/FundWalletIcon";
import OpenessLogo from "../../../icons/OpenessLogo";
import OpenessLogoActive from "../../../icons/OpenessLogoActive";
import useConnection from "../../../hooks/useConnection";
import React, { FunctionComponent } from "react";
import { AppBarSmallScreenProgress } from "./appBarSmallScreenProgress";
import { useRouter } from "next/router";

/**
 * @dev Interface for AppBar (Small screen)
 */
interface AppBarSmallScreen {
    ContextualComponent?: FunctionComponent;
    contextualComponentProps?: { [propName: string]: any };
}

const AppBarSmallScreenUnmemo = ({ ContextualComponent, contextualComponentProps }: AppBarSmallScreen) => {

    /**
     * @dev States and effects are placed in a separate, local-only hook
     */
    const { navbarBackground, singleColorFadeAnim, horizontalFullAnim } = useNavbarVars();

    /**
     * @dev To get current theme
     */
    const { colorMode, toggleColorMode } = useColorMode();

    /**
     * @dev Chakra theme
     */
    const theme: Theme = useTheme();

    /**
     * @dev For connection
     */
    const { disconnect, isConnected, showConnectDialog } = useConnection();

    /**
    * @dev For getting current page
    */
    const router = useRouter();

    return (
        <>
            {/* Top navbar */}
            <Box id="navbar-widescreen-container-sm-top" width="full" position="fixed" top="0" left="0" zIndex="999" display="flex" alignItems="center" paddingY="2" paddingX="4" backgroundColor={navbarBackground}>

                {/* AppTitle */}
                <Link passHref href="/"><a>
                    <OpenessLogoActive height="2rem" width="2rem" />
                </a></Link>

                {/* Contextual element */}
                <Box flexBasis={0} flexGrow={1} height="full">
                    {!!ContextualComponent && <ContextualComponent {...contextualComponentProps} />}
                </Box>

                {/* Menu */}
                <Menu autoSelect={false} isLazy={true}>
                    <MenuButton as={IconButton} aria-label='Navigation menu' icon={<MenuIcon height="2rem" width="2rem" />} variant="unstyled" display="flex" justifyContent="center" alignContent="center" />
                    <MenuList>

                        {/* Option group for Connection */}
                        <MenuOptionGroup title="Wallet">
                            {/* Connect/Disconnect */}
                            <MenuItem icon={<ConnectIcon height="1.25rem" width="1.25rem" />} onClick={isConnected ? disconnect : showConnectDialog}>
                                {isConnected ? "Disconnect" : "Connect"}
                            </MenuItem>

                            {/* Fund wallet */}
                            <MenuItem icon={isConnected ? <FundWalletIconActive height="1.25rem" width="1.25rem" /> : <FundWalletIcon height="1.25rem" width="1.25rem" />} onClick={() => { alert("TODO: FUND BUNDLR"); }} isDisabled={!isConnected}>
                                Fund Bundlr
                            </MenuItem>
                        </MenuOptionGroup>

                        {/* Option group for Settings */}
                        <MenuOptionGroup title="Settings">
                            {/* Theme changer */}
                            <MenuItem icon={colorMode === "light" ? <DayIcon height="1.25rem" width="1.25rem" /> : <NightIcon height="1.25rem" width="1.25rem" fill={theme.colors.blue[50]} />} onClick={toggleColorMode} closeOnSelect={false}>
                                Switch theme
                            </MenuItem>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Box>

            {/* Bottom navbar */}
            <Box id="navbar-widescreen-container-sm-bottom" width="full" position="fixed" bottom="0" left="0" zIndex="999">

                {/* Navbar content */}
                <Box id="navbar-sm-bottom" as="nav" width="full" minHeight="10" zIndex="1" backgroundColor={navbarBackground} paddingY="2" paddingX="4" display="flex" justifyContent={{ base: "space-between", sm: "space-around" }}>

                    {/* Profile */}
                    <Link passHref href="/app/profile"><a>
                        <IconButton display="flex" justifyContent="center" alignItems="center" variant="unstyled" icon={router.pathname.includes("/app/profile") ? <ProfileIconActive height="2rem" width="2rem" /> : <ProfileIcon height="2rem" width="2rem" />} aria-label="Profile" />
                    </a></Link>

                    {/* Notifications */
                        <Link passHref href="/app/notifications"><a>
                            <IconButton display="flex" justifyContent="center" alignItems="center" variant="unstyled" icon={router.pathname.includes("/app/notifications") ? <NotificationIconActive height="2rem" width="2rem" /> : <NotificationIcon height="2rem" width="2rem" />} aria-label="" />
                        </a></Link>}

                    {/* Posts */}
                    <Link passHref href="/app/posts"><a>
                        <IconButton display="flex" justifyContent="center" alignItems="center" variant="unstyled" icon={router.pathname.includes("/app/posts") ? <OpenessLogoActive height="2rem" width="2rem" /> : <OpenessLogo height="2rem" width="2rem" />} aria-label="Posts" />
                    </a></Link>

                    {/* Explore */}
                    <Link passHref href="/app/explore"><a>
                        <IconButton display="flex" justifyContent="center" alignItems="center" variant="unstyled" icon={router.pathname.includes("/app/explore") ? <ExploreIconActive height="2rem" width="2rem" /> : <ExploreIcon height="2rem" width="2rem" />} aria-label="Explore" />
                    </a></Link>

                    {/* Message */}
                    <Link passHref href="/app/messages"><a>
                        <IconButton display="flex" justifyContent="center" alignItems="center" variant="unstyled" icon={router.pathname.includes("/app/messages") ? <MessageIconActive height="2rem" width="2rem" /> : <MessageIcon height="2rem" width="2rem" />} aria-label="Messages" />
                    </a></Link>

                </Box>

                {/* Navbar will show a single progress bar, made of crossfading single color progression */}
                <AppBarSmallScreenProgress />

            </Box>
        </>
    )
}

export const AppBarSmallScreen = React.memo(AppBarSmallScreenUnmemo, ((prevProps, nextProps) => (prevProps.contextualComponentProps === nextProps.contextualComponentProps)));