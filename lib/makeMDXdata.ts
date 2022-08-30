import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
export default async function makeMDXdata(noteName: string) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), NOTES_DIR, noteName),
    'utf-8',
  )
  const { data: frontData, content } = matter(markdown)
  const source = await serialize(content)
  return {
    source,
    frontData,
  }
}
