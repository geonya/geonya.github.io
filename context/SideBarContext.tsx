import { createContext, ReactNode, useContext, useState } from 'react'
import { INote, INotebook, INoteData } from '../types/types'
interface ISideBarContext {
  sideBarShowing: boolean
  toggleSideBar: () => void
  totalNoteData: INoteData[]
  saveTotalNoteData: (data: INoteData[]) => void
  notebooks: INotebook[]
  saveNotebooks: (notebook: INotebook[]) => void
  currentNotebook: INotebook | null
  saveCurrentNotebook: (notebook: INotebook | null) => void
  currentNotes: INote[]
  saveCurrentNotes: (notes: INote[]) => void
}
interface SideBarContextProviderProps {
  children: ReactNode
}

const SideBarContext = createContext<ISideBarContext>({} as ISideBarContext)
export const useSideBarContext = () => useContext(SideBarContext)
export default function SideBarContextProvider({
  children,
}: SideBarContextProviderProps) {
  const [sideBarShowing, setSideBarShowing] = useState(false)
  const [currentNotebook, setCurrentNoteBook] = useState<INotebook | null>(null)
  const [currentNotes, setCurrentNotes] = useState<INote[]>([])
  const [notebooks, setNotebooks] = useState<INotebook[]>([])
  const [totalNoteData, setTotalNoteData] = useState<INoteData[]>([])
  const toggleSideBar = () => setSideBarShowing((prev) => !prev)
  const saveCurrentNotebook = (notebook: INotebook | null) =>
    setCurrentNoteBook(notebook)
  const saveCurrentNotes = (notes: INote[]) => setCurrentNotes(notes)
  const saveNotebooks = (notebooks: INotebook[]) => setNotebooks(notebooks)
  const saveTotalNoteData = (data: INoteData[]) => setTotalNoteData(data)
  return (
    <SideBarContext.Provider
      value={{
        sideBarShowing,
        toggleSideBar,
        totalNoteData,
        saveTotalNoteData,
        currentNotebook,
        saveCurrentNotebook,
        currentNotes,
        saveCurrentNotes,
        notebooks,
        saveNotebooks,
      }}
    >
      {children}
    </SideBarContext.Provider>
  )
}
