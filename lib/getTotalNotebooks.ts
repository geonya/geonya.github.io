import fs from 'fs'
import path from 'path'
import { NOTES_DIR } from '../constants/notebook.constants'
import { INotebook } from '../types/types'
import { slugToTitle } from './changeTitle'
export default function getTotalNotebooks(): INotebook[] {
  const notebookSlugs = fs.readdirSync(path.join(process.cwd(), NOTES_DIR))
  return notebookSlugs.map((slug) => ({ title: slugToTitle(slug), slug }))
}
