import { GetStaticPaths, GetStaticProps } from 'next'
import { useEffect } from 'react'
import { GetNotes } from '../../lib/getNotes'
import { useSideBarContext } from '../../context/SideBarContext'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
interface NoteProps {
  noteTitles: string[]
  notebooks: string[]
  metaData: { [key: string]: string }
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}
export const getStaticPaths: GetStaticPaths = () => {
  const notebookSlugs = GetAllNoteBooks.getSlugs()
  const nestedPaths = notebookSlugs.map((notebook) => {
    const notes = new GetNotes(notebook)
    const slugs = notes.getSlug()
    return slugs.map((slug) => ({ params: { slug } }))
  })
  const paths = nestedPaths.flat()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params)
    return {
      props: {},
    }
  let noteTitles: string[] = []
  const notebooks = GetAllNoteBooks.getTitles()
  const notes = new GetNotes(params.notebook as string)
  noteTitles = notes.getTitles()
  const markdown = fs.readFileSync(
    path.join(
      process.cwd(),
      'data/notebooks',
      params.notebook + '',
      params.slug + '.mdx',
    ),
    'utf-8',
  )
  const { data: metaData, content } = matter(markdown)
  const source = await serialize(content)

  return {
    props: {
      notebooks,
      noteTitles,
      source,
      metaData,
    },
  }
}
interface NoteProps {
  note: string[]
}
const Note = ({ noteTitles, notebooks, source, metaData }: NoteProps) => {
  const { saveNotebooks, saveCurrentNotes } = useSideBarContext()
  useEffect(() => {
    saveNotebooks(notebooks)
    saveCurrentNotes(noteTitles)
  })
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  )
}

export default Note
