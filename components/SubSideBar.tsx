import Link from 'next/link'
import { useSidebarContext } from '../context/SidebarContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { subSideBarLabel, saveSubSideBarLabel } = useSidebarContext()
  const notes = useGetNotes(subSideBarLabel)
  const onDismiss = () => saveSubSideBarLabel(null)
  return (
    <div className='full overflow-y-auto overflow-x-hidden'>
      <div className='flex justify-between'>
        <h3 className='sidebar-title'>{subSideBarLabel?.title}</h3>
        <div onClick={() => onDismiss()} className='cursor-pointer'>
          <span>X</span>
        </div>
      </div>
      <ul className='sidebar-ul'>
        {notes.map((note, i) => (
          <Link key={i} href={`/notes/${note.slug}`}>
            <li className='w-full cursor-pointer whitespace-nowrap'>
              <a className='text-sm font-light'>{note.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
