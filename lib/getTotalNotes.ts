import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import { INote } from '../types/types'
import { slugToTitle } from './changeTitle'

export default function getTotalNotes(): INote[] {
  const noteSlugs = fs.readdirSync(path.join(process.cwd(), `${NOTES_DIR}`))
  const notes = noteSlugs.map((file) => {
    const markdown = fs.readFileSync(
      path.join(process.cwd(), NOTES_DIR, file),
      'utf-8',
    )
    const { data: metaData } = matter(markdown)
    const slug = file.replace('.mdx', '')

    return {
      title: slugToTitle(slug),
      slug,
      notebook: metaData.notebook,
      createdAt: new Date(metaData.createAt),
    }
  })
  return notes
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
    .map((note) => ({ ...note, createdAt: note.createdAt.toString() }))
}
