/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>ShoeMania</title>

        {/* icon */}
        <link
          rel="../public/favicon.io"
          href="/images/favicon.io"
          type="image/x-icon"
        />

        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Courgette&family=Marck+Script&family=Noto+Sans+TC:wght@400;500&family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
