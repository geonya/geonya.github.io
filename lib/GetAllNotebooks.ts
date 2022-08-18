import fs from 'fs'
import path from 'path'
import { NOTEBOOKS_DIR } from '../constants/notebook.constants'
import { INotebook } from '../types/types'
import { slugToTitle } from './changeTitle'
export default function getAllNotebooks(): INotebook[] {
  const notebookSlugs = fs.readdirSync(path.join(process.cwd(), NOTEBOOKS_DIR))
  return notebookSlugs.map((slug) => ({ title: slugToTitle(slug), slug }))
}
