import { ColorHues } from "@chakra-ui/react";
import { generateColorHues } from "./generator";

const blueHue: ColorHues = generateColorHues([
    "#6ad7da", // 50
    "#51d0d4", // 100
    "#38c9cd", // 200
    "#1fc3c7", // 300
    "#06bcc1", // 400
    "#05a9ae", // 500
    "#05969a", // 600
    "#048487", // 700
    "#047174", // 800
    "#035e61"  // 900
]);

export default blueHue;