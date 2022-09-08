import { Center } from '@mantine/core'
import { IconBrandInstagram } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconInstagram({ size }: { size?: number | 19 }) {
  return (
    <Link href={'https://instagram.com/signpod'} passHref>
      <Center
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.5,
          },
        }}
      >
        <IconBrandInstagram size={size} style={{ cursor: 'pointer' }} />
      </Center>
    </Link>
  )
}
