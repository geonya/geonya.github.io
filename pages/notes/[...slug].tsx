import { GetStaticPaths } from 'next'
import { useEffect } from 'react'
import getNotes from '../../lib/getNotes'
import { useSideBarContext } from '../../context/SideBarContext'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import getTotalNotebooks from '../../lib/getTotalNotebooks'
import { NOTES_DIR } from '../../constants/notebook.constants'
import { INoteData } from '../../types/types'
interface NoteProps {
  totalNoteData: INoteData[]
  metaData: { [key: string]: string }
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}
export const getStaticPaths: GetStaticPaths = () => {
  const totalNotebooks = getTotalNotebooks()
  const notebookSlugs = totalNotebooks.map((notebook) => notebook.slug)
  const paths = notebookSlugs
    .map((notebookSlug) => {
      const notesArray = getNotes(notebookSlug)
      return notesArray
        .flat()
        .map(({ slug }) => ({ params: { slug: [notebookSlug, slug] } }))
    })
    .flat()
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const notebook = params.slug[0]
  const note = params.slug[1]
  const allNotebooks = getTotalNotebooks()
  const totalNoteData = allNotebooks.map((notebook) => ({
    notebook,
    notes: getNotes(notebook.slug),
  }))
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, notebook, note + '.mdx'),
    'utf-8',
  )
  const { data: metaData, content } = matter(markdown)
  const source = await serialize(content)

  return {
    props: {
      totalNoteData,
      source,
      metaData,
    },
  }
}
interface NoteProps {
  note: string[]
}
const Note = ({ totalNoteData, source, metaData }: NoteProps) => {
  const { saveTotalNoteData } = useSideBarContext()
  useEffect(() => {
    saveTotalNoteData(totalNoteData)
  })
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  )
}

export default Note
