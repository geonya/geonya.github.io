import MDX from '../components/MDX'
import type { GetStaticProps } from 'next'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { PageProps } from '../types/types'
import makeMDXdata from '../lib/makeMDXdata'

export const getStaticProps: GetStaticProps = async () => {
  const totalNotes = getTotalNotes()
  const mdxData = await makeMDXdata(totalNotes[0].slug + '.mdx')
  return {
    props: {
      totalNotes,
      ...mdxData,
    },
  }
}
const Home = ({ totalNotes, source, frontData }: PageProps) => {
  useSaveTotalNotes(totalNotes)
  return <MDX source={source} frontData={frontData} />
}

export default Home
