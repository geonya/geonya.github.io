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

  sideBarHeight: number
  saveSideBarHeight: (height: number) => void
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
    setSideBarShowing(typeof set !== 'undefined' ? set : (prev) => !prev)

  const [subSideBarLabel, setSubSideBarLabel] =
    useState<ISubSideBarLabel | null>(null)

  const saveSubSideBarLabel = (label: ISubSideBarLabel | null) =>
    setSubSideBarLabel(label)

  const [sideBarHeight, setSideBarHeight] = useState(500)
  const saveSideBarHeight = (height: number) => setSideBarHeight(height)
  return (
    <SidebarContext.Provider
      value={{
        sideBarShowing,
        toggleSideBar,
        subSideBarLabel,
        saveSubSideBarLabel,
        sideBarHeight,
        saveSideBarHeight,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
