import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Add custom scripts or styles here */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js"></script>
      </Html>
    );
  }
}

export default MyDocument;
