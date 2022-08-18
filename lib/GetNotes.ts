import fs from 'fs'
import path from 'path'
import { NOTEBOOKS_DIR } from '../constants/notebook.constants'
import { INote } from '../types/types'
import { slugToTitle } from './changeTitle'

export default function getNotes(notebook: string): INote[] {
  const noteSlugs = fs.readdirSync(
    path.join(process.cwd(), `${NOTEBOOKS_DIR}/${notebook}`),
  )
  return noteSlugs.map((slug) => ({ title: slugToTitle(slug), slug }))
}
