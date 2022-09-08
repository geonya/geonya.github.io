import { Box, useMantineTheme } from '@mantine/core'
import { useSidebarContext } from '../context/SidebarContext'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

export default function SideBarWrapper() {
  const { sideBarShowing, subSideBarLabel, sideBarHeight } = useSidebarContext()
  const theme = useMantineTheme()
  return sideBarShowing ? (
    <Box
      sx={{
        position: 'fixed',
        top: 50,
        left: 0,
        display: 'flex',
        zIndex: 999,
        height: sideBarHeight - 78,
        color: theme.colors.gray[4],
      }}
    >
      <SideBar />
      {subSideBarLabel && <SubSideBar />}
    </Box>
  ) : null
}
