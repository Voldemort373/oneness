import { Box } from "@chakra-ui/react";
import React from "react";

/**
 * @dev Required interfaces for these components
 */
interface INavbarGradientShadowNoProgress {
    singleColorFadeAnim: (el: HTMLDivElement | HTMLParagraphElement | null, whatToAnimate: string) => void;
    colors: Array<string>;
}

interface INavbarGradientShadowProgressUnmemo {
    navbarBackground: string;
    progressColorsGradientAnim: (el: HTMLDivElement | null) => void;
}

/**
 * @description Navbar gradient-shadow component **(WHILE NOT IN PROGRESS)**
 * @dev No memoization; **DO NOT USE DIRECTLY**
 */
const NavbarGradientShadowNoProgressUnmemo = ({ singleColorFadeAnim, colors }: INavbarGradientShadowNoProgress) => (
    <Box id="navbar-widescreen-shadow" height="full" width="full" position="absolute" top="-10px" left="0" zIndex="-1" filter="blur(16px)" ref={(el) => { singleColorFadeAnim(el, "backgroundColor"); }} backgroundColor={colors[3]} />
)

/**
 * @description Navbar multi-color gradient-shadows component **(WHILE IN PROGRESS)**
 * @dev No memoization; **DO NOT USE DIRECTLY**
 */
const NavbarGradientShadowProgressUnmemo = ({ navbarBackground, progressColorsGradientAnim }: INavbarGradientShadowProgressUnmemo) => (
    <Box id="navbar-widescreen-progress-gradient" height="full" width="full" position="absolute" top="-8px" left="0" zIndex="-1" filter="blur(16px)" background={navbarBackground} ref={progressColorsGradientAnim} />
)

/**
 * @description Navbar gradient-shadow component (WHILE NOT IN PROGRESS)
 */
export const NavbarGradientShadowNoProgress = React.memo(NavbarGradientShadowNoProgressUnmemo);

/**
 * @description Navbar multi-color gradient-shadows component (WHILE IN PROGRESS)
 */
export const NavbarGradientShadowProgress = React.memo(NavbarGradientShadowProgressUnmemo);