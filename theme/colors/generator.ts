import { ColorHues } from "@chakra-ui/react";

const HUE_SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

/*
* @param huesArr: Array of hue shades, like ["#ffffff", "#fffff5", ...]
*/
export const generateColorHues = (huesArr: Array<string>): ColorHues => {
    const hues: any = {};
    HUE_SHADES.forEach((hueShadem, index) => {
        hues[index] = huesArr[index];
    })
    return hues;
}