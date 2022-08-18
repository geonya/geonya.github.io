import { useSideBarContext } from '../context/SideBarContext'

export default function SideBar() {
  const { totalNoteData, saveCurrentNotebook } = useSideBarContext()
  return (
    <div className='full overflow-y-auto'>
      <ul className=''>
        <h3 className='text-sm font-semibold'>All Notes +</h3>
        <h3 className='text-sm font-semibold'>Notebooks +</h3>
        {totalNoteData.map(({ notebook }, i) => (
          <li key={i} className='cursor-pointer'>
            <a
              className='text-sm font-light'
              onClick={() => saveCurrentNotebook(notebook)}
            >
              {notebook.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className='mt-24'>
        <h3 className='text-sm font-semibold'>Tags +</h3>
      </ul>
    </div>
  )
}
