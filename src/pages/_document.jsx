import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <link rel="icon" href="/icons/icon-48x48.png?v=fe808657b067201fdd8e22e0c3a39714" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="theme-color" content="#7891F8" />
          <link rel="apple-touch-icon" sizes="48x48" href="/next/icons/icon-48x48.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/next/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/next/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/next/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/next/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/next/icons/icon-256x256.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/next/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/next/icons/icon-512x512.png" />
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}');`,
            }}
          />
        </body>
      </html>
    );
  }
}
