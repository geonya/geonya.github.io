import { useNoteContext } from '../context/NoteContext'

export default function useGetAllNotes() {
  const { totalData } = useNoteContext()
}
