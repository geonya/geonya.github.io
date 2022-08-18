import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import NoteContextProvider from '../context/NoteContext'
import SidebarContextProiver from '../context/SidebarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NoteContextProvider>
        <SidebarContextProiver>
          <Head>
            <title>Geony Devnotes</title>
            <meta name='description' content='Geony devnotes' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SidebarContextProiver>
      </NoteContextProvider>
    </>
  )
}

export default MyApp
