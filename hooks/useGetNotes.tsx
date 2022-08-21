import { useEffect, useState } from 'react'
import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { ISubSideBarLabel } from '../context/SidebarContext'
import { INote } from '../types/types'

export default function useGetNotes(label: ISubSideBarLabel | null): INote[] {
  const { totalNotes } = useNoteContext()
  const [notes, setNotes] = useState<INote[]>([])
  useEffect(() => {
    if (!label) return
    if (label.type === 'note') {
      if (label.title === ALL_NOTES) {
        setNotes(totalNotes)
      }
      setNotes(totalNotes.filter((note) => note.notebook === label.title))
    }
    if (label.type === 'tag') {
      setNotes(
        totalNotes.filter(
          (note) =>
            note.tags.filter((tag) => tag.name === label.title).length > 0,
        ),
      )
    }
  }, [label, totalNotes])
  return notes
}
