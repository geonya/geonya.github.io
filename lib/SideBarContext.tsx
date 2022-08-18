import { createContext, ReactNode, useContext, useState } from 'react'
interface ISideBarContext {
  sideBarShowing: boolean
  toggleSideBar: () => void
  notebooks: string[]
  saveNotebooks: (titles: string[]) => void
  currentNotebook: string
  saveCurrentNoteBook: (title: string) => void
  currentNotes: string[]
  saveCurrentNotes: (notes: string[]) => void
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
  const [currentNotebook, setCurrentNoteBook] = useState<string>('')
  const [currentNotes, setCurrentNotes] = useState<string[]>([])
  const [notebooks, setNotebooks] = useState<string[]>([])
  const toggleSideBar = () => setSideBarShowing((prev) => !prev)
  const saveCurrentNoteBook = (title: string) => setCurrentNoteBook(title)
  const saveCurrentNotes = (titles: string[]) => setCurrentNotes(titles)
  const saveNotebooks = (titles: string[]) => setNotebooks(titles)
  return (
    <SideBarContext.Provider
      value={{
        sideBarShowing,
        toggleSideBar,
        currentNotebook,
        saveCurrentNoteBook,
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
