import { Box, Sx, useMantineTheme } from '@mantine/core'

interface SectionProps {
  children?: React.ReactNode
  sx?: Sx
}

export default function Section({ children, sx }: SectionProps) {
  const theme = useMantineTheme()
  return (
    <Box
      sx={[
        {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? 'rgba(0,0,0,0.6)'
              : 'rgba(255,255,255,0.7)',
        },
        sx,
      ]}
    >
      {children}
    </Box>
  )
}
