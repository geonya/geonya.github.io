import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSidebarContext } from '../context/SidebarContext'
import metaData from '../data/metaData'
import Clock from './Clock'
import Search from './Search'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const { toggleSideBar, sideBarShowing, subSideBarLabel } = useSidebarContext()
  return (
    <div className='h-screen bg-cover bg-center bg-no-repeat bg-base_bg flex items-center overflow-hidden'>
      <div className='full overflow-hidden min-w-[380px] max-h-[800px] mx-auto sm:max-w-screen-sm md:max-screen-md lg:max-w-screen-md xl:max-w-screen-xl grid grid-rows-[50px_1fr_25px] shadow-2xl bg-gray-700/[0.9] backdrop-blur-md text-gray-300 font-thin rounded-lg border border-gray-800'>
        <header className='full grid grid-cols-[50px_1fr_1.2fr] sm:grid-cols-[50px_1fr_1fr_1fr] px-1 border-gray-800 border-b'>
          <button
            className='btn btn-square btn-ghost p-1'
            onClick={() => toggleSideBar()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
          <div className='grid place-content-center'>
            <Link href='/'>
              <h1
                className='font-extralight cursor-pointer'
                onClick={() => toggleSideBar(false)}
              >
                {metaData.title}
              </h1>
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <Search />
          </div>
          <div className='full hidden sm:flex items-center justify-around'>
            <div className='space-x-2 hidden lg:flex'></div>
            <Clock />
          </div>
        </header>
        <main className='full flex relative min-w-[380px] overflow-hidden'>
          {/* Side Bar */}
          {sideBarShowing && (
            <div className='flex bg-gray-800/[0.9] backdrop-blur-md'>
              <div className='w-24 sm:w-32 md:52 border-r border-gray-900 sub-padding'>
                <SideBar />
              </div>
              {subSideBarLabel && (
                <div className='w-32 sm:w-32 md:52 border-r border-gray-900 sub-padding'>
                  <SubSideBar />
                </div>
              )}
            </div>
          )}
          <div className='full overflow-scroll'>{children}</div>
        </main>
        <footer className='full grid place-content-center border-gray-800 border-t'>
          <span className='text-sm text-gray-400'>
            path : {(router.asPath as string) || ''}
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Layout
