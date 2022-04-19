import { ColorHues } from "@chakra-ui/react";
import { generateColorHues } from "./generator";

const orangeHue: ColorHues = generateColorHues([
    "#f8d4a0", // 50
    "#f7cd90", // 100
    "#f6c680", // 200
    "#f5bf70", // 300
    "#f4b860", // 400
    "#dca656", // 500
    "#c3934d", // 600
    "#ab8143", // 700
    "#926e3a", // 800
    "#7a5c30"  // 900
]);

export default orangeHue;