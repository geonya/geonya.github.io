import { GetStaticPaths, GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import { useRouter } from 'next/router'
import path from 'path'
import { useState } from 'react'

interface NotePageProps {
	message: string
}
export const getStaticPaths: GetStaticPaths = async () => {
	const notesDirectory = path.join(process.cwd(), 'data/notebooks/React-js')
	const filenames = await fs.readdir(notesDirectory)
	const ids = filenames.map((filename) => filename.replace('.mdx', ''))
	const paths = ids.map((slug) => ({ params: { slug } }))
	return {
		paths,
		fallback: false
	}
}
export const getStaticProps: GetStaticProps = async (context) => {
	const notesDirectory = path.join(process.cwd(), 'data/notebooks/React-js')
	const filenames = await fs.readdir(notesDirectory)
	const notes = filenames.map(async (filename) => {
		const filePath = path.join(notesDirectory, filename)
		const content = await fs.readFile(filePath, 'utf-8')

		return {
			filename,
			content
		}
	})
	console.log(await Promise.all(notes))
	return {
		props: { message: `Next.js is awesome!` }
	}
}
const Note = ({ message }: NotePageProps) => {
	const {
		query: { id }
	} = useRouter()
	return (
		<div>
			<div>{message}</div>
		</div>
	)
}

export default Note
