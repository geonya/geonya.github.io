import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import NoteContextProvider from '../context/NoteContext'
import SidebarContextProiver from '../context/SidebarContext'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useState } from 'react'
import GlobalStyles from '../components/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <>
      <NoteContextProvider>
        <SidebarContextProiver>
          <Head>
            <title>Geony Devnotes</title>
            <meta name='description' content='Geony devnotes' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colorScheme,
                breakpoints: {
                  xs: 500,
                  sm: 800,
                  md: 1000,
                  lg: 1275,
                  xl: 1600,
                },
              }}
            >
              <GlobalStyles />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MantineProvider>
          </ColorSchemeProvider>
        </SidebarContextProiver>
      </NoteContextProvider>
    </>
  )
}

export default MyApp
