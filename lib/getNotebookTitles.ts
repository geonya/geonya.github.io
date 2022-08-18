import fs from 'fs'
import path from 'path'
import { titleToSlug } from './changeTitle'
const getNotebookTitles = () => {
  const notebooksDir = path.join(process.cwd(), `/data/notebooks`)
  const noteSlugs = fs.readdirSync(notebooksDir)
  const noteTitles = noteSlugs.map((slug) => titleToSlug(slug))
  return noteTitles
}

export default getNotebookTitles
