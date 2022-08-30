import fs from 'fs'
import path from 'path'
import MDX from '../components/MDX'
import type { GetStaticProps } from 'next'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { PageProps } from '../types/types'
import { NOTES_DIR } from '../constants/notebook.constants'
import makeMDXdata from '../lib/makeMDXdata'

export const getStaticProps: GetStaticProps = async () => {
  const notes = fs.readdirSync(path.join(process.cwd(), NOTES_DIR))
  const mdxData = makeMDXdata(notes[0])
  return {
    props: {
      totalNotes: getTotalNotes(),
      ...mdxData,
    },
  }
}
const Home = ({ totalNotes, source, frontData }: PageProps) => {
  useSaveTotalNotes(totalNotes)
  return <MDX source={source} frontData={frontData} />
}

export default Home
