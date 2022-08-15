import type { NextPage } from 'next'
import SideBar from '../components/SideBar'
import SubSideBar from '../components/SubSideBar'
import { useMenuContext } from '../lib/MenuContext'

const Home: NextPage = () => {
	const menuContext = useMenuContext()
	return (
		<div className="full grid grid-cols-10">
			{menuContext?.menuShowing && (
				<>
					<div className="col-span-2 border-r border-gray-800">
						<SideBar />
					</div>
					<div className="col-span-2 full border-r border-gray-800">
						<SubSideBar />
					</div>
				</>
			)}
			<div className="full">Content</div>
		</div>
	)
}

export default Home
