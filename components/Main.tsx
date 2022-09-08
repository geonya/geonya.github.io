import { ScrollArea, useMantineTheme } from '@mantine/core'
import React from 'react'
import { MAIN_HEIGHT } from '../constants/styles.constants'

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  return (
    <ScrollArea
      scrollbarSize={6}
      scrollHideDelay={1000}
      sx={{
        overflowX: 'hidden',
        height: MAIN_HEIGHT,
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
