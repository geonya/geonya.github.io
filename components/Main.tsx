import { ScrollArea } from '@mantine/core'
import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea
      scrollbarSize={6}
      scrollHideDelay={1000}
      sx={{
        height: 700,
        whiteSpace: 'nowrap',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </ScrollArea>
  )
}
