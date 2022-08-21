import { useNoteContext } from '../context/NoteContext'
import { INote } from '../types/types'

export default function useSearchNotes(keyword: string): INote[] {
  const { totalNotes } = useNoteContext()
  if (!keyword) return []
  const notes = totalNotes.filter(
    (note) =>
      note.title.includes(keyword) ||
      note.tags.filter((tag) => tag.name.includes(keyword)).length > 0 ||
      note.content.toLowerCase().includes(keyword?.toLowerCase()),
  )
  return notes
}
