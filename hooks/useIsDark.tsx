import { useMantineColorScheme, useMantineTheme } from '@mantine/core'

export default function useIsDark() {
  const theme = useMantineTheme()
  const isDark = theme.colorScheme === 'dark'
  return isDark
}
