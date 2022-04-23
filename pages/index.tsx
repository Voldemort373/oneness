import { Input } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AppBar from "../components/organisms/appbar";

const HomePage: NextPage = () => {

  const [text, setText] = useState<string>("");

  return (
    <>
      {/* Meta */}
      <Head>

      </Head>

      {/* UI */}
      <>
        {/* AppBar */}
        <AppBar shouldShowOnSmallScreens={true} shouldShowOnWideScreens={true} ContextualComponent={Input} contextualComponentProps={{ value: text, placeholder: "Dummy...", onChange: (e: any) => { setText(e.target.value); } }} />
      </>

    </>
  )
}

export default HomePage;
