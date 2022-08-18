import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { INote } from '../types/types'

export default function useGetNotes(notebook: string | null): INote[] {
  const { totalNotes } = useNoteContext()
  if (!notebook) return []
  if (notebook === ALL_NOTES) {
    return totalNotes
  }
  const notes = totalNotes.filter((note) => note.notebook === notebook)
  return notes
}
