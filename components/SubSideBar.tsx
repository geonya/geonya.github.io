import Link from 'next/link'
import { useSideBarContext } from '../context/SideBarContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { currentNotebook, saveCurrentNotebook } = useSideBarContext()
  const notes = useGetNotes(currentNotebook)
  return (
    <>
      <div className='flex justify-between'>
        <h1>{currentNotebook?.title}</h1>
        <div
          onClick={() => saveCurrentNotebook(null)}
          className='p-1 cursor-pointer'
        >
          <span>X</span>
        </div>
      </div>
      <ul className='full'>
        {notes.map((note, i) => (
          <li key={i} className='cursor-pointer'>
            <Link
              href={`/notes/${currentNotebook?.title.replace(' ', '-')}/${
                note.slug
              }`}
            >
              <a className='text-xs font-thin'>{note.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
