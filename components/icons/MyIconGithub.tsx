import { Center } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'
import Link from 'next/link'

export default function MyIconGithub({ size }: { size?: number | 19 }) {
  return (
    <Link href={'https://github.com/geonya'} passHref>
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
        <IconBrandGithub size={size} />
      </Center>
    </Link>
  )
}
