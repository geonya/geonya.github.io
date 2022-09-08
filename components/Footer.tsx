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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.fontSizes.sm,
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 0,

          zIndex: 888,
        },
        backgroundColor: isDark
          ? theme.fn.rgba(theme.colors.dark[5], 1)
          : theme.colors.gray[1],
      }}
    >
      path: {(router.asPath as string) || ''}
    </Box>
  )
}
