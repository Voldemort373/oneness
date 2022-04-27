import { Box, Button, ButtonProps, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import ExploreIcon from "../../../icons/ExploreIcon";
import ExploreIconActive from "../../../icons/ExploreIconActive";
import MessageIconActive from "../../../icons/MessageIconActive";
import MessageIcon from "../../../icons/MessageIcon";
import ProfileIcon from "../../../icons/ProfileIcon";
import ProfileIconActive from "../../../icons/ProfileIconActive";
import NotificationIcon from "../../../icons/NotificationIcon";
import NotificationIconActive from "../../../icons/NotificationIconActive";
import OpenessLogoActive from "../../../icons/OpenessLogoActive";
import OpenessLogo from "../../../icons/OpenessLogo";
import { useRouter } from "next/router";
import React from "react";

interface SidebarNav {
    setPostDialogVisible: (postDialogVisible: boolean) => void
}

/**
 * @summary This component is meant to be used on the left sidebar for nav
 * @notice This is only for widescreen
*/
function SidebarNavUnmemo({ setPostDialogVisible }: SidebarNav) {

    /**
     * @dev Router from Next
     */
    const router = useRouter();

    return (
        <Box width="full" as="aside" padding="4">

            {/* Nav */}
            <Box as="nav" width="full" marginTop="16">
                <UnorderedList width="full" display="flex" flexDirection="column" gap="4" margin="0">
                    {/* Profile */}
                    <ListItem listStyleType="none"><Link passHref href="/app/profile"><a>
                        <NavButton leftIcon={router.pathname.includes("/app/profile") ? <ProfileIconActive height="2rem" width="2rem" /> : <ProfileIcon height="2rem" width="2rem" />}>Profile</NavButton>
                    </a></Link></ListItem>

                    {/* Notifications */}
                    <ListItem listStyleType="none"><Link passHref href="/app/notifications"><a>
                        <NavButton leftIcon={router.pathname.includes("/app/notifications") ? <NotificationIconActive height="2rem" width="2rem" /> : <NotificationIcon height="2rem" width="2rem" />}>Notifications</NavButton>
                    </a></Link></ListItem>

                    {/* Posts */}
                    <ListItem listStyleType="none"><Link passHref href="/app/posts"><a>
                        <NavButton leftIcon={router.pathname.includes("/app/posts") ? <OpenessLogoActive height="2rem" width="2rem" /> : <OpenessLogo height="2rem" width="2rem" />}>Posts</NavButton>
                    </a></Link></ListItem>

                    {/* Explore */}
                    <ListItem listStyleType="none"><Link passHref href="/app/explore"><a>
                        <NavButton leftIcon={router.pathname.includes("/app/explore") ? <ExploreIconActive height="2rem" width="2rem" /> : <ExploreIcon height="2rem" width="2rem" />}>Explore</NavButton>
                    </a></Link></ListItem>

                    {/* Messages */}
                    <ListItem listStyleType="none"><Link passHref href="/app/messages"><a>
                        <NavButton leftIcon={router.pathname.includes("/app/messages") ? <MessageIconActive height="2rem" width="2rem" /> : <MessageIcon height="2rem" width="2rem" />}>Messages</NavButton>
                    </a></Link></ListItem>
                </UnorderedList>
            </Box>

            {/* Post button */}
            <Button width="full" colorScheme="green" size="lg" marginTop="16" onClick={() => { setPostDialogVisible(true) }}>
                Post
            </Button>

        </Box>
    )
}

/**
 * @summary This component is for the menu buttons on this sidebar nav
 */
const NavButton = (props: ButtonProps) => (
    <Button backgroundColor="transparent" width="full" size="lg" justifyContent="start" gap="2" {...props}>
        {props?.children}
    </Button>
)

/**
 * @summary This component is meant to be used on the left sidebar for nav
 * @notice This is only for widescreen
 * @dev Memoized component
*/
const SidebarNav = React.memo(SidebarNavUnmemo, (prevProps, nextProps) => (prevProps.setPostDialogVisible === nextProps.setPostDialogVisible));
export default SidebarNav;