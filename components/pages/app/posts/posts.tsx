import { Box, Hide, IconButton, Modal, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ThreeColumnLayout from "../../../atoms/threeColumnLayout";
import AppBar from "../../../organisms/appbar";
import SidebarNav from "../../../organisms/sidebarNav";
import PostDialog from "./postDialog/postDialog";
import PostsFeed from "./postsFeed";
import PostIcon from "../../../../icons/PostIcon";

export default function Posts() {

    /**
     * @dev To track if the Post dialog is visible
     */
    const [postDialogVisible, setPostDialogVisible] = useState<boolean>(false);

    /**
     * @dev To track when page loads
     */
    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
            {/* AppBar */}
            <AppBar shouldShowBottomBarOnSmallScreens={true} shouldShowOnWideScreens={true} shouldShowTopBarOnSmallScreens={true} />

            {/* Post dialog */}
            <PostDialog isOpen={postDialogVisible} onClose={() => { setPostDialogVisible(false); }} />

            {/* For widescreens */}
            {ready &&
                <Show above="md">
                    <ThreeColumnLayout height="full">

                        {/* Sidebar nav */}
                        <SidebarNav setPostDialogVisible={setPostDialogVisible} />

                        {/* Posts feed */}
                        <PostsFeed />

                        {/* ? */}
                        <Box background="red">
                            THIRD COLUMN
                        </Box>
                    </ThreeColumnLayout>
                </Show>
            }


            {/* For small screens */}
            {ready &&
                <Hide above="md">

                    {/* Posts feed */}
                    <PostsFeed />

                    {/* Post button */}
                    <IconButton height="14" width="14" colorScheme="green" size='lg' isRound aria-label="Post" icon={<PostIcon height="1.75rem" width="1.75rem" fill="#ffffff" />} zIndex="overlay" position="fixed" bottom="20" right="4" onClick={() => { setPostDialogVisible(true); }} />
                </Hide>
            }
        </>
    )
}