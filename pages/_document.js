import Document, { Head, Html, NextScript, Main } from "next/document"
export default class ThisAppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Hero Randomer</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
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
}
