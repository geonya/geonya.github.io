import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import SideBarContextProvider from '../lib/SideBarContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<SideBarContextProvider>
				<Head>
					<title>Geony Devnotes</title>
					<meta name="description" content="Geony devnotes" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SideBarContextProvider>
		</>
	)
}

export default MyApp
