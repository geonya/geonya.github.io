import { useNoteContext } from '../context/NoteContext'
import { INote, INotebook } from '../types/types'

export default function useGetNotes(notebook: INotebook | null): INote[] {
  const { totalData } = useNoteContext()
  if (!notebook) return []
  const noteData = totalData.filter(
    (data) => data.notebook.title === notebook.title,
  )[0]
  const { notes } = noteData
  return notes
}
