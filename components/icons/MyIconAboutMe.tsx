import { Center } from '@mantine/core'
import { IconUser } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconAboutMe({ size }: { size?: number | 19 }) {
  return (
    <Link href={'/notes/about-me'} passHref>
      <Center
        component='a'
        sx={{
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.5,
          },
        }}
      >
        <IconUser size={size} style={{ cursor: 'pointer' }} />
      </Center>
    </Link>
  )
}
