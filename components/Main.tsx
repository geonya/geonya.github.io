import { ScrollArea, useMantineTheme } from '@mantine/core'
import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  return (
    <ScrollArea
      scrollbarSize={6}
      scrollHideDelay={1000}
      sx={{
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.dark[8], 0.5)
            : theme.fn.rgba(theme.colors.gray[0], 1),
        overflowX: 'hidden',
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: '100vw',
          height: '100vh',
        },
      }}
    >
      {children}
    </ScrollArea>
  )
}
