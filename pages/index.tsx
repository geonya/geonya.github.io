import { promises as fs } from 'fs'
import type { GetStaticProps, NextPage } from 'next'
import path from 'path'
import { useEffect } from 'react'
import { useSideBarContext } from '../lib/SideBarContext'
import { INotebook } from '../types/types'

interface HomeProps {
	notebooks: INotebook[]
}
export const getStaticProps: GetStaticProps = async () => {
	const notebooksDir = path.join(process.cwd(), 'data/notebooks')
	const notebooksSlug = await fs.readdir(notebooksDir)
	const notebooks = notebooksSlug.map((slug) => ({
		title: slug.replace('-', ' '),
		slug
	}))
	return {
		props: {
			notebooks
		}
	}
}
const Home: NextPage<HomeProps> = ({ notebooks }) => {
	const sideBarContext = useSideBarContext()
	useEffect(() => {
		sideBarContext?.saveNotebooks(notebooks)
	}, [notebooks, sideBarContext])
	return <div className="full">Index Page</div>
}

export default Home
