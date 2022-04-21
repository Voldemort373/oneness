import { extendTheme, Theme, withDefaultColorScheme } from "@chakra-ui/react";
import blueHue from "./colors/blue";
import greenHue from "./colors/green";
import redHue from "./colors/red";
import orangeHue from "./colors/orange";
import componentStyles from "./components";

const theme = extendTheme(
    {
        colors: {
            green: greenHue,
            blue: blueHue,
            red: redHue,
            orange: orangeHue
        },
        fonts: {
            body: "'Noto Sans', sans-serif",
            heading: "'Josefin Sans', sans-serif",
            mono: "'Oxygen Mono', monospace",
        },
        components: {
            Button: componentStyles.buttonStyle
        },
        config: {
            initialColorMode: "light",
            useSystemColorMode: false
        }
    },
    withDefaultColorScheme({ colorScheme: "green" })
) as Theme;

export default theme;