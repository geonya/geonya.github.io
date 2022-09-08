import { IconBrandGithub } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconGithub({ size }: { size?: number | 20 }) {
  return (
    <Link href={'https://github.com/geonya'} passHref>
      <a target='_blank' rel='noopener noreferrer'>
        <IconBrandGithub size={size} style={{ cursor: 'pointer' }} />
      </a>
    </Link>
  )
}
