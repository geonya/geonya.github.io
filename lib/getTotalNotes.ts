import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import { INote, ITag } from '../types/types'
import { slugToTitle, titleToSlug } from './changeTitle'

export default function getTotalNotes(): INote[] {
  const noteSlugs = fs.readdirSync(path.join(process.cwd(), `${NOTES_DIR}`))
  const notes = noteSlugs.map((file) => {
    const markdown = fs.readFileSync(
      path.join(process.cwd(), NOTES_DIR, file),
      'utf-8',
    )
    const { data: frontData, content } = matter(markdown)
    const slug = file.replace('.mdx', '')
    let tags: ITag[] = []
    if (frontData.tags && frontData.tags.length > 0) {
      tags = frontData.tags.map((tag: string) => ({
        name: tag,
        slug: titleToSlug(tag),
      }))
    }
    return {
      title: slugToTitle(slug),
      slug,
      tags,
      content,
      notebook: frontData.notebook,
      createdAt: new Date(frontData.createAt),
    }
  })
  return notes
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
    .map((note) => ({ ...note, createdAt: note.createdAt.toString() }))
}
