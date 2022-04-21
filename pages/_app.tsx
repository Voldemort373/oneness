import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import AppBar from '../components/organisms/appbar';
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";

function OnenessApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <AppBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default OnenessApp;
