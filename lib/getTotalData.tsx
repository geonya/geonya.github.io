import getNotes from './getNotes'
import getTotalNotebooks from './getTotalNotebooks'

export default function getTotalData() {
  return getTotalNotebooks().map((notebook) => ({
    notebook,
    notes: getNotes(notebook.slug),
  }))
}
