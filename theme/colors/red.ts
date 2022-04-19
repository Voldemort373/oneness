import { ColorHues } from "@chakra-ui/react";
import { generateColorHues } from "./generator";

const redHue: ColorHues = generateColorHues([
    "#ff9c9f", // 50
    "#ff8c8f", // 100
    "#ff7b7f", // 200
    "#ff6b6f", // 300
    "#ff5a5f", // 400
    "#e65156", // 500
    "#cc484c", // 600
    "#b33f43", // 700
    "#993639", // 800
    "#802d30"  // 900
]);

export default redHue;