import { GetStaticPaths } from 'next'
import useSaveTotalData from '../../hooks/useSaveTotalNotes'
import { PageProps } from '../../types/types'
import getTotalNotes from '../../lib/getTotalNotes'
import MDX from '../../components/MDX'
import makeMDXdata from '../../lib/makeMDXdata'

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
  const mdxData = await makeMDXdata(slug + '.mdx')
  return {
    props: {
      totalNotes: getTotalNotes(),
      ...mdxData,
    },
  }
}

const Note = ({ totalNotes, source, frontData }: PageProps) => {
  useSaveTotalData(totalNotes)
  return <MDX source={source} frontData={frontData} />
}

export default Note
