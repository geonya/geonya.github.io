import { createContext, ReactNode, useContext, useState } from 'react'
import { INote } from '../types/types'
interface INoteContext {
  totalNotes: INote[]
  saveTotalNotes: (notes: INote[]) => void

  currentNotebook: string | null
  saveCurrentNotebook: (notebook: string | null) => void
}
interface NoteContextProviderProps {
  children: ReactNode
}

const NoteContext = createContext<INoteContext>({} as INoteContext)

export const useNoteContext = () => useContext(NoteContext)

export default function NoteContextProvider({
  children,
}: NoteContextProviderProps) {
  const [currentNotebook, setCurrentNoteBook] = useState<string | null>(null)
  const [totalNotes, setTotalNotes] = useState<INote[]>([])
  const saveCurrentNotebook = (notebook: string | null) =>
    setCurrentNoteBook(notebook)
  const saveTotalNotes = (notes: INote[]) => setTotalNotes(notes)
  return (
    <NoteContext.Provider
      value={{
        totalNotes,
        saveTotalNotes,
        currentNotebook,
        saveCurrentNotebook,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
