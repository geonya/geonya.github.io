import { createContext, ReactNode, useContext, useState } from 'react'
import { INote, ITag } from '../types/types'
interface INoteContext {
  totalNotes: INote[]
  saveTotalNotes: (notes: INote[]) => void
}
interface NoteContextProviderProps {
  children: ReactNode
}

const NoteContext = createContext<INoteContext>({} as INoteContext)

export const useNoteContext = () => useContext(NoteContext)

export default function NoteContextProvider({
  children,
}: NoteContextProviderProps) {
  const [totalNotes, setTotalNotes] = useState<INote[]>([])
  const saveTotalNotes = (notes: INote[]) => setTotalNotes(notes)

  return (
    <NoteContext.Provider
      value={{
        totalNotes,
        saveTotalNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
