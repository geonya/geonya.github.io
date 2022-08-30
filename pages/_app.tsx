import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import NoteContextProvider from '../context/NoteContext'
import SidebarContextProiver from '../context/SidebarContext'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from '@mantine/core'
import { useState } from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { SpotlightProvider } from '@mantine/spotlight'
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
            <MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
              <SpotlightProvider
                nothingFoundMessage='Nothing found...'
                shortcut={['mod + P', 'mod + K', '/']}
                actions={[]}
                filter={(query, actions) =>
                  actions.filter(
                    (action) =>
                      action.title
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      action.description
                        ?.toLowerCase()
                        .includes(query.toLowerCase()) ||
                      action.content
                        ?.toLowerCase()
                        .includes(query.toLowerCase()),
                  )
                }
              >
                <GlobalStyles />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </SpotlightProvider>
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
