import { createContext, type ReactNode, useContext, useState } from 'react'

interface ISidebarContext {
  sideBarShowing: boolean
  toggleSideBar: () => void
}
interface SidebarContextProviderProps {
  children: ReactNode
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext)

export const useSidebarContext = () => useContext(SidebarContext)

export default function SidebarContextProiver({
  children,
}: SidebarContextProviderProps) {
  const [sideBarShowing, setSideBarShowing] = useState(false)
  const toggleSideBar = () => setSideBarShowing((prev) => !prev)
  return (
    <SidebarContext.Provider
      value={{
        sideBarShowing,
        toggleSideBar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
