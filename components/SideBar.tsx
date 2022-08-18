import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'

export default function SideBar() {
  const { totalNotes, currentNotebook, saveCurrentNotebook } = useNoteContext()
  return (
    <div className='full overflow-y-auto'>
      <ul className=''>
        <h3
          className='text-sm font-semibold cursor-pointer'
          onClick={() =>
            saveCurrentNotebook(
              currentNotebook !== ALL_NOTES ? ALL_NOTES : null,
            )
          }
        >
          All Notes +
        </h3>

        {totalNotes.map(({ notebook }, i) => (
          <li
            key={i}
            className='cursor-pointer'
            onClick={() =>
              saveCurrentNotebook(
                notebook !== currentNotebook ? notebook : null,
              )
            }
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
