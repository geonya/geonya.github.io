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
import GlobalStyles from '../styles/GlobalStyles'
import myTheme from '../styles/myTheme'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
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
                ...myTheme,
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

declare module '@mantine/core' {
  export interface MantineThemeOther {}
}
