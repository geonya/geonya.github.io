import { createContext, ReactNode, useContext, useState } from 'react'

interface IMenuContext {
	menuShowing: boolean
	toggleMenu: () => void
}
interface MenuContextProviderProps {
	children: ReactNode
}
const MenuContext = createContext<IMenuContext | null>(null)
export const useMenuContext = () => useContext(MenuContext)
export default function MenuContextProvider({
	children
}: MenuContextProviderProps) {
	const [menuShowing, setMenuShowing] = useState(false)
	const toggleMenu = () => setMenuShowing((prev) => !prev)
	return (
		<MenuContext.Provider value={{ menuShowing, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	)
}
