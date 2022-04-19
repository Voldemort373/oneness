import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";
import blueHue from "./colors/blue";
import greenHue from "./colors/green";
import redHue from "./colors/red";
import yellowHue from "./colors/yellow";
import componentStyles from "./components";

const theme = extendTheme(
    {
        colors: {
            green: greenHue,
            blue: blueHue,
            red: redHue,
            yellow: yellowHue
        },
        fonts: {
            body: "'Noto Sans', sans-serif",
            heading: "'Josefin Sans', sans-serif",
            mono: "'Oxygen Mono', monospace",
        },
        components: {
            Button: componentStyles.buttonStyle
        }
    },
    withDefaultColorScheme({ colorScheme: "green" })
) as Theme;

export default theme;