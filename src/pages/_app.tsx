import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './../styles/global';
import theme from '../styles/theme';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
