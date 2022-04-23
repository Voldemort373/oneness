import { Hide, Show } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { AppBarWidescreen } from "./appBarWidescreen";
import { AppBarSmallScreen } from "./appBarSmallScreen";

/**
 * @dev Interface for AppBar
 */
interface AppBar {
    ContextualComponent?: FunctionComponent;
    contextualComponentProps?: { [propName: string]: any };
    shouldShowOnWideScreens?: boolean;
    shouldShowOnSmallScreens?: boolean;
}

/**
 * @summary AppBar component for use in all pages, **INDIVIDUALLY**.
 * @dev Use in each page that you need AppBars, and pass appropriate props for versatility.
 * @param shouldShowOnSmallScreens If navbar should show up on smaller screens; *default: `true`*.
 * @param shouldShowOnWideScreens If navbar should show up on wider screens; *default: `true`*.
 * @param ContextualComponent Contextual component to show for the page *(OPTIONAL)*
 * @param contextualComponentProps Props for the Contextual component *(OPTIONAL)*
 * @returns AppBar component with everything working on its own
 */
export default function AppBar({ shouldShowOnSmallScreens = true, shouldShowOnWideScreens = true, ContextualComponent, contextualComponentProps }: AppBar) {

    /**
     * @dev This state is needed to decide when to render the AppBar, since we use 'Show' component
     */
    const [firstLoadDone, setFirstLoadDone] = useState<boolean>(false);
    useEffect(() => {
        setFirstLoadDone(true);
    }, []);

    return !firstLoadDone ? <></> : (
        <>
            {/* For widescreen, lg and above */}
            {shouldShowOnWideScreens &&
                <Show above="md">
                    <AppBarWidescreen />
                </Show>
            }

            {/* For smaller screens, md and below */}
            {shouldShowOnSmallScreens &&
                <Hide above="md">
                    <AppBarSmallScreen ContextualComponent={ContextualComponent} contextualComponentProps={contextualComponentProps} />
                </Hide>
            }
        </>
    )
}
