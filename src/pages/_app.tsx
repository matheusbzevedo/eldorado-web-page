import Router from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';

import GlobalStyles from './../styles/global';
import theme from '../styles/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
