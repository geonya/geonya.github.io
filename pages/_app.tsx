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
  useMantineTheme,
} from '@mantine/core'
import { useState } from 'react'
import GlobalStyles from '../components/GlobalStyles'
import { SpotlightProvider } from '@mantine/spotlight'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  const theme = useMantineTheme()
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
                other: {
                  borderWidth: '1px',
                  borderColor:
                    theme.colorScheme === 'dark'
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(0,0,0,0.2)',
                },
              }}
            >
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
  export interface MantineThemeOther {
    borderWidth: string
    borderColor: string
  }
}
