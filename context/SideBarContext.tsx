import { createContext, type ReactNode, useContext, useState } from 'react'

type ISubSideBarLabelType = 'tag' | 'note'

export interface ISubSideBarLabel {
  type: ISubSideBarLabelType
  title: string
}

interface ISidebarContext {
  sideBarShowing: boolean
  toggleSideBar: (set?: boolean) => void

  subSideBarLabel: ISubSideBarLabel | null
  saveSubSideBarLabel: (label: ISubSideBarLabel | null) => void
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
  const toggleSideBar = (set?: boolean) =>
    setSideBarShowing(set ? set : (prev) => !prev)

  const [subSideBarLabel, setSubSideBarLabel] =
    useState<ISubSideBarLabel | null>(null)

  const saveSubSideBarLabel = (label: ISubSideBarLabel | null) =>
    setSubSideBarLabel(label)
  return (
    <SidebarContext.Provider
      value={{
        sideBarShowing,
        toggleSideBar,
        subSideBarLabel,
        saveSubSideBarLabel,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
