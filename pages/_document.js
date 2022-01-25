import Document, { Head, Html, NextScript, Main } from "next/document"
export default class ThisAppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Hero Randomer</title>
          <meta name={"description"} />
          <meta name="google-site-verification" content="VCHFDWGu5MM7TifIFMI_RvW1eeCpW6IWTMaW1T5uXIk" />
          <meta name="yandex-verification" content="d09860e19ea9c05b" />
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
