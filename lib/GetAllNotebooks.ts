import fs from 'fs'
import path from 'path'
import { NOTEBOOKS_DIR } from '../constants/notebook.constants'
import { titleToSlug } from './changeTitle'
export class GetAllNoteBooks {
  private static slugs: string[] = fs.readdirSync(
    path.join(process.cwd(), NOTEBOOKS_DIR),
  )
  static getTitles() {
    return this.slugs.map((slug) => titleToSlug(slug))
  }
  static getSlugs() {
    return this.slugs
  }
}
