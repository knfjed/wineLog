import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="description" content="A site for programming portfolio" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;600&family=Raleway:wght@100;300;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>{`
          body {
            font-family: "Montserrat", "Raleway", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
