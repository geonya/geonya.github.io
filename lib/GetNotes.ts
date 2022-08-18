import fs from 'fs'
import path from 'path'
import { NOTEBOOKS_DIR } from '../constants/notebook.constants'
import { slugToTitle } from './changeTitle'

export class GetNotes {
  constructor(private readonly notebook: string) {
    this.notebook = notebook
  }
  private readonly slugs = fs.readdirSync(
    path.join(process.cwd(), `${NOTEBOOKS_DIR}/${this.notebook}`),
  )
  getTitles() {
    return this.slugs.map((name) => slugToTitle(name.replace('.mdx', '')))
  }
  getSlug() {
    return this.slugs.map((slug) => slug.replace('.mdx', ''))
  }
}
