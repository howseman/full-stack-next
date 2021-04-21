import Document, { Html, Head, Main, NextScript } from 'next/document'

// FROM: https://nextjs.org/docs/advanced-features/custom-document
class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="buildVersion" content="0.1" />{/* I added this ;) */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
