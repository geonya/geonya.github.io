import { Box } from '@mantine/core'
import { IconBrandInstagram } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconInstagram({ size }: { size?: number | 20 }) {
  return (
    <Link href={'https://instagram.com/signpod'} passHref>
      <a target='_blank' rel='noopener noreferrer'>
        <IconBrandInstagram size={size} style={{ cursor: 'pointer' }} />
      </a>
    </Link>
  )
}
