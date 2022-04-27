import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface PostDialog {
    isOpen: boolean;
    onClose: () => any;
}

const PostDialogUnmemo = ({ isOpen, onClose }: PostDialog) => {

    /**
     * @dev Post dialog size
     */
    const postDialogSize = useBreakpointValue({ base: "full", md: "lg", lg: "xl" });

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={postDialogSize} isCentered scrollBehavior="inside">
            <ModalOverlay />

            <ModalContent padding={{base: "0", md: "2"}} borderRadius={{ base: "0", md: "md" }}>
                <ModalHeader padding="6">Write your post</ModalHeader>
                <ModalCloseButton />

                {/* Body - Editor */}
                <ModalBody>
                    POST EDITOR
                </ModalBody>

                {/* Footer - Buttons */}
                <ModalFooter padding="4">

                    {/* Close */}
                    <Button mr={2} onClick={onClose} backgroundColor="transparent">
                        Cancel
                    </Button>

                    {/* Post */}
                    <Button colorScheme='green' paddingX="8">
                        Post
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

/**
 * @dev Memoizing this component before exporting
 */
const PostDialog = React.memo(PostDialogUnmemo, (prevProps, nextProps) => (
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.onClose === nextProps.onClose
));
export default PostDialog;