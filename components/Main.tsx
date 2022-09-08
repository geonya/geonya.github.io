import { ScrollArea, useMantineTheme } from '@mantine/core'
import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()

  return (
    <ScrollArea
      scrollbarSize={6}
      scrollHideDelay={1000}
      sx={{
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.dark[8], 0.5)
            : theme.fn.rgba(theme.colors.gray[0], 1),
      }}
    >
      {children}
    </ScrollArea>
  )
}
