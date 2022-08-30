import { Box, ScrollArea } from '@mantine/core'
import React from 'react'
import { useSidebarContext } from '../context/SidebarContext'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

export default function Main({ children }: { children: React.ReactNode }) {
  const { toggleSideBar, sideBarShowing, subSideBarLabel } = useSidebarContext()
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
      {sideBarShowing && (
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
          }}
        >
          <SideBar />
          {subSideBarLabel && <SubSideBar />}
          <div
            className='sidebar-background-click-closing'
            onClick={() => toggleSideBar()}
            style={{ flex: 1 }}
          />
        </Box>
      )}

      <Box>{children}</Box>
    </ScrollArea>
  )
}
