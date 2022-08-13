import { NextPage } from 'next'
import metaData from '../../data/metaData'

interface LayoutProps {
	children: React.ReactNode
}
const Layout: NextPage<LayoutProps> = ({ children }) => {
	return (
		<div className="h-screen bg-cover bg-center bg-no-repeat bg-base_bg flex items-center">
			<div className="full max-h-[800px] mx-auto sm:max-w-screen-sm md:max-screen-md lg:max-w-screen-md xl:max-w-screen-xl grid grid-rows-[40px_1fr_25px] shadow-2xl dark:bg-gray-700/[0.9] backdrop-blur-md dark:text-white font-thin rounded-lg border dark:border-gray-800">
				<header className="full grid grid-cols-3 px-1 border-gray-800 border-b">
					<div className="full grid place-content-center">
						<h1 className="font-extralight">{metaData.title}</h1>
					</div>
					<div className="full grid place-content-center">
						<form>
							<label className="relative">
								<span className="absolute top-0 bottom-0 my-auto left-2">
									🔎
								</span>
								<input
									className="w-full appearance-none focus:outline-none border border-gray-800 focus:ring focus:ring-blue-400/[0.5] rounded-full bg-gray-700 px-5 pl-8 py-1 text-sm"
									type="text"
									placeholder="search"
								/>
							</label>
						</form>
					</div>
					<div className="full flex items-center justify-around">
						<div className="space-x-2">
							<span>🗓/</span>
							<span>🕐</span>
							<span>☕️</span>
						</div>
						<h4>08:48</h4>
					</div>
				</header>
				<main className="full">{children}</main>
				<footer className="full grid place-content-center border-gray-800 border-t">
					<span className="text-sm">this is status bar.</span>
				</footer>
			</div>
		</div>
	)
}

export default Layout
