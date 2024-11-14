import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="facebook-domain-verification"
            content="jcq40svrw1zdw5v9lbrx9z8i704h44"
          />
          <link rel="icon" href="/favicon.png"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
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

export default MyDocument;
