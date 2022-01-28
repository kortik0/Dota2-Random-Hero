import Document, { Head, Html, NextScript, Main } from "next/document"

export default class ThisAppDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <title>Dota 2 Hero Randomiser</title>
          <meta
            name={"description"}
            content={
              "Unique and modern hero randomizer for Dota 2 which allows you to filter the heroes by their attributes, type of attack, roles, difficulty to randomly choose the hero you want!"
            }
          />
          <meta
            name="google-site-verification"
            content="VCHFDWGu5MM7TifIFMI_RvW1eeCpW6IWTMaW1T5uXIk"
          />
          <meta name="yandex-verification" content="d09860e19ea9c05b" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-F763H691PC"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
             window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-F763H691PC');
            `,
            }}
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
