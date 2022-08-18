import fs from 'fs'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import { INote } from '../types/types'
import { slugToTitle } from './changeTitle'

export default function getNotes(notebook: string): INote[] {
  const noteSlugs = fs.readdirSync(
    path.join(process.cwd(), `${NOTES_DIR}/${notebook}`),
  )
  return noteSlugs.map((file) => {
    const slug = file.replace('.mdx', '')
    return { title: slugToTitle(slug), slug }
  })
}
