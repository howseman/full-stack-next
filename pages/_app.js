import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'ui/theme'
import Header from 'ui/components/Header'

import '../styles/globals.scss' // Notice: This is the only file where you can import global css files

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1.0" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');</style>
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
