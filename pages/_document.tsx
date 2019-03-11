import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          {/* <style>{`body.preload *{transition: none}`}</style> */}
          {/* <script dangerouslySetInnerHTML={{ __html: ` window.addEventListener('load',function(){document.body.classList.remove('preload')})` }} /> */}
        </Head>
        <body className="preload">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument