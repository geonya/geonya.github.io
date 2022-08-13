import { NextPage } from 'next'
import metaData from '../../data/metaData'

interface LayoutProps {
  children: React.ReactNode
}
const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-slate-400 flex items-center">
      <div className="full max-h-[800px] mx-auto sm:max-w-screen-sm md:max-screen-md lg:max-w-screen-md xl:max-w-screen-xl bg-blue-500 grid grid-rows-[40px_1fr_20px] shadow-2xl dark:bg-gray-700 dark:text-white font-thin rounded-lg">
        <header className="full grid grid-cols-2 px-1 border-gray-800 border-b">
          <div className='full grid place-content-center'>
            <h1 className='font-extralight'>{metaData.title}</h1>
          </div>
          <div className='full flex items-center justify-around'>
            <div className='space-x-2'>
              <span>🗓/</span>
              <span>🕐</span>
              <span>☕️</span>
            </div>
            <h4>08:48</h4>
          </div>
        </header>
        <main className="full">{children}</main>
        <footer className='full border-gray-800 border-t'>
          <h4>this is status bar.</h4>
        </footer>
      </div>
    </div>
  )
}

export default Layout
