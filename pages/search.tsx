import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSaveTotalNotes from '../hooks/useSaveTotalNotes'
import useSearchNotes from '../hooks/useSearchNotes'
import getTotalNotes from '../lib/getTotalNotes'
import { INote } from '../types/types'

interface SearchProps {
  totalNotes: INote[]
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      totalNotes: getTotalNotes(),
    },
  }
}

export default function SearchPage({ totalNotes }: SearchProps) {
  useSaveTotalNotes(totalNotes)
  const router = useRouter()
  const { keyword } = router.query
  const notes = useSearchNotes(keyword as string)
  if (notes === []) {
    return <div>Search Result Not Found</div>
  }
  return (
    <div>
      <h2>Search : {router.query.keyword}</h2>
      <ul className='full'>
        {notes.map((note, i) => (
          <Link key={i} href={`/notes/${note.slug}`}>
            <li className='cursor-pointer'>
              <a className='text-xs font-thin'>{note.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
