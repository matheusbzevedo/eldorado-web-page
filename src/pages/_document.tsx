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
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='eSports organization' />
          <meta name='google-site-verification' content='google-site-verification=2DI1H-9G6B-B16rL0tNIeM0Fj2D-8Uqjmv5hlSduhGs' />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (window.location.hostname !== 'localhost') {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                }
              `,
            }}
          />
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
