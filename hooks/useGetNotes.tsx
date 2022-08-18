import { useSideBarContext } from '../context/SideBarContext'
import { INote, INotebook } from '../types/types'

export default function useGetNotes(notebook: INotebook | null): INote[] {
  const { totalNoteData } = useSideBarContext()
  if (!notebook) return []
  const noteData = totalNoteData.filter(
    (data) => data.notebook.title === notebook.title,
  )[0]
  const { notes } = noteData
  return notes
}
