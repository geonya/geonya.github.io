import { Box, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
import useIsDark from '../hooks/useIsDark'

export default function Footer() {
  const theme = useMantineTheme()
  const isDark = useIsDark()
  const router = useRouter()
  return (
    <Box
      sx={{
        height: 30,
        borderTop: `1px solid ${
          isDark ? theme.colors.dark[4] : theme.colors.dark[0]
        }`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.fontSizes.sm,
      }}
    >
      path: {(router.asPath as string) || ''}
    </Box>
  )
}
