import { NextPage } from 'next'
import Link from 'next/link'
import { useNoteContext } from '../context/NoteContext'
import { useSidebarContext } from '../context/SideBarContext'
import metaData from '../data/metaData'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const { toggleSideBar, sideBarShowing } = useSidebarContext()
  const { currentNotebook } = useNoteContext()
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat bg-base_bg flex items-center'>
      <div className='full max-h-[800px] mx-auto sm:max-w-screen-sm md:max-screen-md lg:max-w-screen-md xl:max-w-screen-xl grid grid-rows-[50px_1fr_25px] shadow-2xl dark:bg-gray-700/[0.9] backdrop-blur-md dark:text-white font-thin rounded-lg border dark:border-gray-800'>
        <header className='full grid grid-cols-[50px_1fr_1fr] sm:grid-cols-[50px_1fr_1fr_1fr] px-1 border-gray-800 border-b'>
          <div className='grid place-content-center'>
            <span
              onClick={toggleSideBar}
              className='text-lg p-2 cursor-pointer'
            >
              ㅁ
            </span>
          </div>
          <div className='full grid place-content-center'>
            <Link href='/'>
              <h1 className='font-extralight cursor-pointer'>
                {metaData.title}
              </h1>
            </Link>
          </div>
          <div className='full flex items-center justify-center'>
            <form className='w-[90%] max-w-[300px'>
              <label className='relative'>
                <span className='absolute top-0 bottom-0 my-auto left-2'>
                  🔎
                </span>
                <input
                  className='appearance-none w-full focus:outline-none border border-gray-800 focus:ring focus:ring-blue-400/[0.5] rounded-full bg-gray-700 px-5 pl-8 py-1 text-sm'
                  type='text'
                  placeholder='search'
                />
              </label>
            </form>
          </div>
          <div className='full hidden sm:flex items-center justify-around'>
            <div className='space-x-2'>
              <span>🗓/</span>
              <span>🕐</span>
              <span>☕️</span>
            </div>
            <h4>08:48</h4>
          </div>
        </header>
        <main className='full flex relative'>
          {/* Side Bar */}
          {sideBarShowing && (
            <div className='flex h-full absolute sm:static sm:top-0 sm:left-0 bg-gray-800 backdrop-blur-md'>
              <div className='w-24 sm:w-52 border-r border-gray-900'>
                <SideBar />
              </div>
              {currentNotebook && (
                <div className='w-32 sm:w-52 border-r border-gray-900'>
                  <SubSideBar />
                </div>
              )}
            </div>
          )}
          <div className='w-full'>{children}</div>
        </main>
        <footer className='full grid place-content-center border-gray-800 border-t'>
          <span className='text-sm'>this is status bar.</span>
        </footer>
      </div>
    </div>
  )
}

export default Layout
