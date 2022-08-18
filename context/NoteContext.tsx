import { createContext, ReactNode, useContext, useState } from 'react'
import { INotebook, INoteData } from '../types/types'
interface INoteContext {
  totalData: INoteData[]
  saveTotalData: (data: INoteData[]) => void

  currentNotebook: INotebook | null
  saveCurrentNotebook: (notebook: INotebook | null) => void
}
interface NoteContextProviderProps {
  children: ReactNode
}

const NoteContext = createContext<INoteContext>({} as INoteContext)

export const useNoteContext = () => useContext(NoteContext)

export default function NoteContextProvider({
  children,
}: NoteContextProviderProps) {
  const [currentNotebook, setCurrentNoteBook] = useState<INotebook | null>(null)
  const [totalData, settotalData] = useState<INoteData[]>([])

  const saveCurrentNotebook = (notebook: INotebook | null) =>
    setCurrentNoteBook(notebook)
  const saveTotalData = (data: INoteData[]) => settotalData(data)
  return (
    <NoteContext.Provider
      value={{
        totalData,
        saveTotalData,
        currentNotebook,
        saveCurrentNotebook,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
