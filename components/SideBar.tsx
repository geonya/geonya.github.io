import { useNoteContext } from '../context/NoteContext'

export default function SideBar() {
  const { totalNotes, saveCurrentNotebook } = useNoteContext()
  return (
    <div className='full overflow-y-auto'>
      <ul className=''>
        <h3
          className='text-sm font-semibold'
          onClick={() => saveCurrentNotebook(null)}
        >
          All Notes +
        </h3>
        <h3 className='text-sm font-semibold'>Notebooks +</h3>
        {totalNotes.map(({ notebook }, i) => (
          <li
            key={i}
            className='cursor-pointer'
            onClick={() => saveCurrentNotebook(notebook)}
          >
            <span className='text-sm font-light'>{notebook}</span>
          </li>
        ))}
      </ul>
      <ul className='mt-24'>
        <h3 className='text-sm font-semibold'>Tags +</h3>
      </ul>
    </div>
  )
}
