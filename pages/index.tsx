import type { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'
import getAllNotebooks from '../lib/getAllNotebooks'
import getNotes from '../lib/getNotes'
import { useSideBarContext } from '../context/SideBarContext'
import { INoteData } from '../types/types'
interface Homeprops {
  totalNoteData: INoteData[]
}
export const getStaticProps: GetStaticProps = () => {
  const allNotebooks = getAllNotebooks()
  const totalNoteData = allNotebooks.map((notebook) => ({
    notebook,
    notes: getNotes(notebook.slug),
  }))
  return {
    props: {
      totalNoteData,
    },
  }
}
const Home = ({ totalNoteData }: Homeprops) => {
  const { saveTotalNoteData } = useSideBarContext()
  useEffect(() => {
    saveTotalNoteData(totalNoteData)
  })
  return <div className='full'>Index Page</div>
}

export default Home
