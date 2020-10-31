import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content='eSports organization' />
          <meta name='keywords' content='DOTA, FreeFire, LOL, eSports, e-sports, e sports, organization, organização, jogos, games, CS, counter strike, league of legends, free fire' />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <link rel='icon' href='/favicon.co' />
          <meta name='description' content='eSports organization' />
          <link
            rel='preload'
            href='./fonts/Dolce Vita.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='./fonts/Dolce Vita Light.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='./fonts/Dolce Vita Heavy Bold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='./fonts/ReemKufi-Regular.ttf'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
