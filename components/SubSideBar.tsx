import Link from 'next/link'
import { useSidebarContext } from '../context/SidebarContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { subSideBarLabel, saveSubSideBarLabel } = useSidebarContext()
  const notes = useGetNotes(subSideBarLabel)
  const onDismiss = () => saveSubSideBarLabel(null)
  return (
    <>
      <div className='flex justify-between'>
        <h1>{subSideBarLabel?.title}</h1>
        <div onClick={() => onDismiss()} className='p-1 cursor-pointer'>
          <span>X</span>
        </div>
      </div>
      <ul className='full'>
        {notes.map((note, i) => (
          <Link key={i} href={`/notes/${note.slug}`}>
            <li className='cursor-pointer'>
              <a className='text-xs font-thin'>{note.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
