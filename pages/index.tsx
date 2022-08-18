import type { GetStaticProps } from 'next'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { INote } from '../types/types'
interface Homeprops {
  totalNotes: INote[]
}
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      totalNotes: getTotalNotes(),
    },
  }
}
const Home = ({ totalNotes }: Homeprops) => {
  useSaveTotalNotes(totalNotes)
  return <div className='full'>Index Page</div>
}

export default Home
