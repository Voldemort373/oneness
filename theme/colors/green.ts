import { ColorHues } from "@chakra-ui/react";
import { generateColorHues } from "./generator";

const greenHue: ColorHues = generateColorHues([
    "#a3dab5", // 50
    "#94d4a9", // 100
    "#85cd9d", // 200
    "#75c790", // 300
    "#66c184", // 400
    "#5cae77", // 500
    "#529a6a", // 600
    "#47875c", // 700
    "#3d744f", // 800
    "#336142"  // 900
]);

export default greenHue;