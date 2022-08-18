import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getNotes from '../../lib/getTotalNotes'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { NOTES_DIR } from '../../constants/notebook.constants'
import { GetStaticPaths } from 'next'
import useSaveTotalData from '../../hooks/useSaveTotalNotes'
import { INote } from '../../types/types'
import getTotalNotes from '../../lib/getTotalNotes'

interface NoteProps {
  totalNotes: INote[]
  metaData: { [key: string]: string }
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface IParams {
  params: { slug: string }
}

export const getStaticPaths: GetStaticPaths = () => {
  const totalNotes = getTotalNotes()
  const paths = totalNotes.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: IParams) => {
  const { slug } = params
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, slug + '.mdx'),
    'utf-8',
  )
  const { data: metaData, content } = matter(markdown)
  const source = await serialize(content)
  return {
    props: {
      totalNotes: getTotalNotes(),
      source,
      metaData,
    },
  }
}
interface NoteProps {
  note: string[]
}
const Note = ({ totalNotes, source, metaData }: NoteProps) => {
  useSaveTotalData(totalNotes)
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  )
}

export default Note
