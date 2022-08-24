import type { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { IMetaData, INote } from '../types/types'
import fs from 'fs'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDX from '../components/MDX'
interface HomeProps {
  totalNotes: INote[]
  metaData: IMetaData
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}
export const getStaticProps: GetStaticProps = async () => {
  const notes = fs.readdirSync(path.join(process.cwd(), NOTES_DIR))
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, notes[0]),
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
  return <MDX source={source} metaData={metaData} />
}

export default Home
