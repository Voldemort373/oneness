import HomeContainer1 from "./home-container-1";
import AppBar from "../../organisms/appbar";

export default function Home() {
    return (
        <>
            {/* AppBar */}
            <AppBar shouldShowBottomBarOnSmallScreens={false} shouldShowTopBarOnSmallScreens={true} shouldShowOnWideScreens={true} />

            {/* Container 1 */}
            <HomeContainer1 />
        </>
    )
}