import type { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'
import { GetAllNoteBooks } from '../lib/GetAllNotebooks'
import { GetNotes } from '../lib/GetNotes'
import { useSideBarContext } from '../lib/SideBarContext'

interface Homeprops {
  notebooks: string[]
}
export const getStaticProps: GetStaticProps = () => {
  const notebooks = GetAllNoteBooks.getTitles()
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
