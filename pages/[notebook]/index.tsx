import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'
import fs from 'fs'
import { useSideBarContext } from '../../lib/SideBarContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getNotebookTitles from '../../lib/getNotebookTitles'
type NoteTitlesType = string[]
interface NoteBookProps {
  noteTitles: NoteTitlesType
  notebooks: string[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  let noteTitles: string[] = []
  const notebooks = getNotebookTitles()
  if (context.params) {
    const notebookDir = path.join(
      process.cwd(),
      `/data/notebooks/${context.params['notebook']}`,
    )
    const noteFiles = fs.readdirSync(notebookDir)
    noteTitles = noteFiles.map((file) => file.replace('.mdx', ''))
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
