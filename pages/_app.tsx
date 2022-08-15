import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import MenuContextProvider from '../lib/MenuContext'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Geony Devnotes</title>
				<meta name="description" content="Geony devnotes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MenuContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MenuContextProvider>
		</>
	)
}

export default MyApp
