import { createContext, ReactNode, useContext, useState } from 'react'
import { INotebook } from '../types/types'
interface ISideBarContext {
	sideBarShowing: boolean
	toggleSideBar: () => void
	notebooks: INotebook[]
	saveNotebooks: (notebooks: INotebook[]) => void
}
interface SideBarContextProviderProps {
	children: ReactNode
}

const SideBarContext = createContext<ISideBarContext | null>(null)
export const useSideBarContext = () => useContext(SideBarContext)
export default function SideBarContextProvider({
	children
}: SideBarContextProviderProps) {
	const [sideBarShowing, setSideBarShowing] = useState(false)
	const [notebooks, setNotebooks] = useState<INotebook[]>([])
	const toggleSideBar = () => setSideBarShowing((prev) => !prev)
	const saveNotebooks = (notebooks: INotebook[]) => setNotebooks(notebooks)
	return (
		<SideBarContext.Provider
			value={{
				sideBarShowing,
				toggleSideBar,
				notebooks,
				saveNotebooks
			}}
		>
			{children}
		</SideBarContext.Provider>
	)
}
