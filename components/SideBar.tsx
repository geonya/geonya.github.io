import Link from 'next/link'
import { titleToSlug } from '../lib/changeTitle'
import { useSideBarContext } from '../lib/SideBarContext'

export default function SideBar() {
  const sideBarContext = useSideBarContext()
  return (
    <div className='full overflow-y-auto'>
      <ul className=''>
        <h3 className='text-sm font-semibold'>All Notes +</h3>
        <h3 className='text-sm font-semibold'>Notebooks +</h3>
        {sideBarContext?.notebooks.map((notebook, i) => (
          <li key={i} className='cursor-pointer'>
            <Link href={`/${titleToSlug(notebook)}`}>
              <a
                className='text-sm font-light'
                onClick={() => sideBarContext?.saveCurrentNoteBook(notebook)}
              >
                {notebook}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='mt-24'>
        <h3 className='text-sm font-semibold'>Tags +</h3>
      </ul>
    </div>
  )
}
