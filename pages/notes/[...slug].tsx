import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getNotes from '../../lib/getNotes'
import getTotalNotebooks from '../../lib/getTotalNotebooks'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { NOTES_DIR } from '../../constants/notebook.constants'
import { INoteData } from '../../types/types'
import { GetStaticPaths } from 'next'
import getTotalData from '../../lib/getTotalData'
import useSaveTotalData from '../../hooks/useSaveTotalData'

interface NoteProps {
  totalData: INoteData[]
  metaData: { [key: string]: string }
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface IParams {
  params: { slug: string[] }
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
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: IParams) => {
  const notebook = params.slug[0]
  const note = params.slug[1]
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, notebook, note + '.mdx'),
    'utf-8',
  )
  const { data: metaData, content } = matter(markdown)
  const source = await serialize(content)
  return {
    props: {
      totalData: getTotalData(),
      source,
      metaData,
    },
  }
}
interface NoteProps {
  note: string[]
}
const Note = ({ totalData, source, metaData }: NoteProps) => {
  useSaveTotalData(totalData)
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  )
}

export default Note
