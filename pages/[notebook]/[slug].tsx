import { MDXProvider } from '@mdx-js/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'
import { GetAllNoteBooks } from '../../lib/GetAllNotebooks'
import { GetNotes } from '../../lib/GetNotes'
import { useSideBarContext } from '../../lib/SideBarContext'
import fs from 'fs'
import path from 'path'
interface NoteProps {
  noteTitles: string[]
  notebooks: string[]
}
export const getStaticPaths: GetStaticPaths = () => {
  const notebookSlugs = GetAllNoteBooks.getSlugs()
  const nestedPaths = notebookSlugs.map((notebook) => {
    const notes = new GetNotes(notebook)
    const slugs = notes.getSlug()
    return slugs.map((slug) => ({ params: { notebook, slug } }))
  })
  const paths = nestedPaths.flat()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  let noteTitles: string[] = []
  const notebooks = GetAllNoteBooks.getTitles()
  if (params) {
    const notes = new GetNotes(params.notebook as string)
    noteTitles = notes.getTitles()
    const markdownWithMeta = fs.readFileSync(
      path.join(
        process.cwd(),
        'data/notebooks',
        params.notebook + '',
        params.slug + '.mdx',
      ),
      'utf-8',
    )
    console.log(markdownWithMeta)
  }
  return {
    props: {
      notebooks,
      noteTitles,
    },
  }
}
interface NoteProps {
  note: string[]
}
const Note = ({ noteTitles, notebooks }: NoteProps) => {
  const { saveNotebooks, saveCurrentNotes } = useSideBarContext()
  useEffect(() => {
    saveNotebooks(notebooks)
    saveCurrentNotes(noteTitles)
  })
  return (
    <div>
      <MDXProvider></MDXProvider>
    </div>
  )
}

export default Note
