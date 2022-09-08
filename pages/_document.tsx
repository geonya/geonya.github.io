import { createStylesServer, ServerStyles } from '@mantine/next'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const stylesServer = createStylesServer()

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key='styles'
        />,
      ],
    }
  }

  render() {
    return (
      <Html className='dark'>
        <Head>
          <meta
            name='google-site-verification'
            content='CVPwlvyCfAcFv5BPylyH86z747Dmd9BnawXmJ8d-Bq0'
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

export default MyDocument
