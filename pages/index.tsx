import type { NextPage } from 'next'
import { useMenuContext } from '../lib/MenuContext'

const Home: NextPage = () => {
	const menuContext = useMenuContext()
	return (
		<div className="full grid grid-cols-10">
			{menuContext?.menuShowing && (
				<>
					<div className="col-span-2 border-r border-gray-800">
						<div>Side Menu</div>
					</div>
					<div className="col-span-2 full border-r border-gray-800">
						<div>Sub Side Menu</div>
					</div>
				</>
			)}
			<div className="full">Content</div>
		</div>
	)
}

export default Home
