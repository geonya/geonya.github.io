import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className="full flex">
			<div className="full max-w-1/3 border-r border-gray-800">
				<div>Side Menu</div>
			</div>
			<div className="full max-w-1/3 border-r border-gray-800">
				<div>Sub Side Menu</div>
			</div>
			<div className="full">Content</div>
		</div>
	)
}

export default Home
