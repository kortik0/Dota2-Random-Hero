import Document, { Head, Html, NextScript, Main } from "next/document"

export default class ThisAppDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          {/*Primary Meta Tags*/}
          <title>Dota 2 Hero Randomizer | kortiko project</title>
          <meta
            name={"title"}
            content="Dota 2 Hero Randomizer | kortiko project"
          />
          <meta
            name={"description"}
            content={
              "Unique and modern hero randomizer for Dota 2 which allows you to filter the heroes by their attributes, type of attack, roles, difficulty to randomly choose the hero you want! Random and find your favorite Dota Hero!"
            }
          />

          {/*Open Graph / Facebook*/}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://randomdotahero.vercel.app/"
          />
          <meta
            property="og:title"
            content="Dota 2 Hero Randomizer | kortiko project"
          />
          <meta
            property="og:description"
            content="Unique and modern hero randomizer for Dota 2 which allows you to filter the heroes by their attributes, type of attack, roles, difficulty to randomly choose the hero you want! Random and find your favorite Dota Hero!"
          />
          <meta property="og:image" content="tmpseoimage.jpg" />

          {/*Twitter*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://randomdotahero.vercel.app/"
          />
          <meta
            property="twitter:title"
            content="Dota 2 Hero Randomizer | kortiko project"
          />
          <meta
            property="twitter:description"
            content="Unique and modern hero randomizer for Dota 2 which allows you to filter the heroes by their attributes, type of attack, roles, difficulty to randomly choose the hero you want! Random and find your favorite Dota Hero!"
          />
          <meta property="twitter:image" content="tmpseoimage.jpg" />

          {/*Another*/}
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
