// pages/_document.js
// Pre-loads the Google Fonts the component references in its inline styles.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hi">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Noto+Sans+Devanagari:wght@400;600;700&family=DM+Serif+Display:ital@0;1&family=Tiro+Devanagari+Hindi&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0, padding: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
