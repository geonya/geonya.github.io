import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import getNotebookTitles from '../lib/getNotebookTitles'
import { useSideBarContext } from '../lib/SideBarContext'

interface Homeprops {
  notebooks: string[]
}
export const getStaticProps: GetStaticProps = () => {
  const notebooks = getNotebookTitles()
  return {
    props: {
      notebooks,
    },
  }
}
const Home = ({ notebooks }: Homeprops) => {
  const sidebarContext = useSideBarContext()
  useEffect(() => {
    sidebarContext?.saveNotebooks(notebooks)
  }, [sidebarContext, notebooks])
  return <div className='full'>Index Page</div>
}

export default Home
