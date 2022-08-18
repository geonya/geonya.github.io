import { GetStaticPaths, GetStaticProps } from 'next'
import { useSideBarContext } from '../../lib/SideBarContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetAllNoteBooks } from '../../lib/GetAllNotebooks'
import { GetNotes } from '../../lib/GetNotes'

interface NoteBookProps {
  noteTitles: string[]
  notebooks: string[]
}
export const getStaticPaths: GetStaticPaths = () => {
  const notebookSlugs = GetAllNoteBooks.getSlugs()
  const paths = notebookSlugs.map((slug) => ({ params: { notebook: slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let noteTitles: string[] = []
  const notebooks = GetAllNoteBooks.getTitles()
  if (context.params) {
    const notes = new GetNotes(context.params.notebook as string)
    noteTitles = notes.getTitles()
  }
  return {
    props: {
      notebooks,
      noteTitles,
    },
  }
}
const Notebook = ({ noteTitles, notebooks }: NoteBookProps) => {
  const router = useRouter()
  const sidebarContext = useSideBarContext()
  useEffect(() => {
    sidebarContext?.saveNotebooks(notebooks)
    if (noteTitles) {
      sidebarContext?.saveCurrentNotes(noteTitles)
    }
  }, [noteTitles, sidebarContext, notebooks])
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <div></div>
}
export default Notebook
