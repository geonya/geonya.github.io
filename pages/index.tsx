import type { GetStaticProps } from 'next'
import { INoteData } from '../types/types'
import getTotalData from '../lib/getTotalData'
import useSaveTotalData from '../hooks/useSaveTotalData'
interface Homeprops {
  totalData: INoteData[]
}
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      totalData: getTotalData(),
    },
  }
}
const Home = ({ totalData }: Homeprops) => {
  useSaveTotalData(totalData)
  return <div className='full'>Index Page</div>
}

export default Home
