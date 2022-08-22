import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { useSidebarContext } from '../context/SidebarContext'
import extractTags from '../lib/extractTags'

export default function SideBar() {
  const { totalNotes } = useNoteContext()
  const { saveSubSideBarLabel } = useSidebarContext()

  const tags = extractTags(totalNotes)
  return (
    <div className='full overflow-y-auto'>
      <ul className=''>
        <h3
          className='text-sm font-semibold cursor-pointer'
          onClick={() =>
            saveSubSideBarLabel({
              type: 'note',
              title: ALL_NOTES,
            })
          }
        >
          All Notes +
        </h3>

        {totalNotes.map(({ notebook }, i) => (
          <li
            key={i}
            className='cursor-pointer'
            onClick={() =>
              saveSubSideBarLabel({
                type: 'note',
                title: notebook,
              })
            }
          >
            <span className='text-sm font-light'>{notebook}</span>
          </li>
        ))}
      </ul>
      <ul className='mt-24'>
        <h3 className='text-sm font-semibold'>Tags +</h3>
        {tags.map((tag, i) => (
          <li
            key={i}
            className='cursor-pointer'
            onClick={() =>
              saveSubSideBarLabel({ type: 'tag', title: tag.name })
            }
          >
            <span className='text-sm font-light'>{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
