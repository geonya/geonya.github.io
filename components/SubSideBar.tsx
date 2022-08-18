import Link from 'next/link'
import { useNoteContext } from '../context/NoteContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { currentNotebook, saveCurrentNotebook } = useNoteContext()
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
          <Link
            key={i}
            href={`/notes/${currentNotebook?.title.replace(' ', '-')}/${
              note.slug
            }`}
          >
            <li className='cursor-pointer'>
              <a className='text-xs font-thin'>{note.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
