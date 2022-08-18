import Link from 'next/link'
import { useSideBarContext } from '../lib/SideBarContext'

export default function SubSideBar() {
  const sidebarContext = useSideBarContext()
  return (
    <>
      <div className='flex justify-between'>
        <h1>{sidebarContext?.currentNotebook}</h1>
        <div
          onClick={() => sidebarContext?.saveCurrentNoteBook('')}
          className='p-1 cursor-pointer'
        >
          <span>X</span>
        </div>
      </div>
      <ul className='full'>
        {sidebarContext?.currentNotes.map((note, i) => (
          <li key={i} className='cursor-pointer'>
            <Link
              href={`/${sidebarContext.currentNotebook.replace(
                ' ',
                '-',
              )}/${note}`}
            >
              <a className='text-xs font-thin'>{note}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
