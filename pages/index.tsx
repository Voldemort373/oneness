import type { NextPage } from 'next';
import Head from 'next/head';
import AppBar from "../components/organisms/appbar";

const HomePage: NextPage = () => {
  return (
    <>
      {/* Meta */}
      <Head>

      </Head>

      {/* UI */}
      <>
        {/* AppBar */}
        <AppBar shouldShowOnSmallScreens={true} shouldShowOnWideScreens={true} />
      </>

    </>
  )
}

export default HomePage;
