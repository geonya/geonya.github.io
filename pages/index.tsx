import type { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { INote } from '../types/types'
import fs from 'fs'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
interface HomeProps {
  totalNotes: INote[]
  metaData: { [key: string]: string }
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}
export const getStaticProps: GetStaticProps = async () => {
  const notes = fs.readdirSync(path.join(process.cwd(), NOTES_DIR))
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, notes[notes.length - 1]),
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
const Home = ({ totalNotes, source, metaData }: HomeProps) => {
  useSaveTotalNotes(totalNotes)
  return (
    <div className='full'>
      <MDXRemote {...source} />
    </div>
  )
}

export default Home
