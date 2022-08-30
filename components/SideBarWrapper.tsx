import { Box } from '@mantine/core'
import { useSidebarContext } from '../context/SidebarContext'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

export default function SideBarWrapper() {
  const { sideBarShowing, subSideBarLabel } = useSidebarContext()
  return sideBarShowing ? (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        zIndex: 999,
      }}
    >
      <SideBar />
      {subSideBarLabel && <SubSideBar />}
    </Box>
  ) : null
}
