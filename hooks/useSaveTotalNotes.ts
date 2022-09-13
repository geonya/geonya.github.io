import { useEffect } from 'react'
import { useNoteContext } from '../context/NoteContext'
import { INote } from '../types/types'

export default function useSaveTotalNotes(notes?: INote[]) {
  const { saveTotalNotes } = useNoteContext()
  useEffect(() => {
    if (notes) {
      saveTotalNotes(notes)
    }
  }, [saveTotalNotes, notes])
}
