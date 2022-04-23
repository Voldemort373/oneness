import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavbar } from "../../../hooks/useNavbar";
import { useNavbarVars } from "./useNavbarVars";

const AppBarSmallScreenProgressUnmemo = () => {

    /**
     * @dev Navbar state hook
     */
    const { navbarState } = useNavbar();

    /**
     * @dev States and effects are placed in a separate, local-only hook
     */
    const { navbarBackground, singleColorFadeAnim, horizontalFullAnim } = useNavbarVars();

    return (
        <Box id="progress-bar-sm-container" height="1" width="full" background={navbarBackground}>
            <Box id="progress-bar-sm" height="full" width="25%" ref={(el) => {
                singleColorFadeAnim(el, "backgroundColor");
                horizontalFullAnim(el);
            }} display={navbarState.progress ? "block" : "none"} />
        </Box>
    )
}

/**
 * @summary Shows a progress bar, single color at a time with changing through gradients
 */
export const AppBarSmallScreenProgress = React.memo(AppBarSmallScreenProgressUnmemo);