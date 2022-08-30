import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { IMetaData, INote } from '../types/types'
import { NOTES_DIR } from '../constants/notebook.constants'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import MDX from '../components/MDX'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

interface HomeProps {
  totalNotes: INote[]
  metaData: IMetaData
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  content: string
}
export const getStaticProps: GetStaticProps = async () => {
  const notes = fs.readdirSync(path.join(process.cwd(), NOTES_DIR))
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, notes[0]),
  )
  const { data: metaData, content: rawContent } = matter(markdown)
  const content = String(
    await compile(markdown, { remarkPlugins: [remarkGfm] }),
  )
  const source = await serialize(rawContent)
  return {
    props: {
      totalNotes: getTotalNotes(),
      source,
      content,
      metaData,
    },
  }
}
const Home = ({ totalNotes, source, metaData, content }: HomeProps) => {
  useSaveTotalNotes(totalNotes)
  return <MDX source={source} metaData={metaData} content={content} />
}

export default Home
