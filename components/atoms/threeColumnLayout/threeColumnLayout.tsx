import { Box, Grid, GridProps } from "@chakra-ui/react";

/**
 * @summary This component renders a three column layout in 1:2:1 width ratio.
 */
export default function ThreeColumnLayout(props: GridProps) {
    return (
        <Grid {...props} display="grid" templateColumns="1fr 2fr 1fr">
            {props?.children}
        </Grid>
    )
}