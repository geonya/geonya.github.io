import { useEffect } from 'react'
import { useNoteContext } from '../context/NoteContext'
import { INoteData } from '../types/types'

export default function useSaveTotalData(totalData: INoteData[]) {
  const { saveTotalData } = useNoteContext()
  useEffect(() => {
    saveTotalData(totalData)
  })
}
