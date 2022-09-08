import { IconUser } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconAboutMe({ size }: { size?: number | 20 }) {
  return (
    <Link href={'/notes/about-me'} passHref>
      <a>
        <IconUser size={size} style={{ cursor: 'pointer' }} />
      </a>
    </Link>
  )
}
