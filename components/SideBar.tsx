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
      <div className=''>
        <h3
          className='sidebar-title mb-2'
          onClick={() =>
            saveSubSideBarLabel({
              type: 'note',
              title: ALL_NOTES,
            })
          }
        >
          All Notes +
        </h3>
        <ul className='sidebar-ul'>
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
              <a className='text-sm font-light'>{notebook}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-10'>
        <h3 className='sidebar-title mb-2'>Tags +</h3>
        <ul className='sidebar-ul'>
          {tags.map((tag, i) => (
            <li
              key={i}
              className='cursor-pointer'
              onClick={() =>
                saveSubSideBarLabel({ type: 'tag', title: tag.name })
              }
            >
              <a className='text-sm font-light'>{tag.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
