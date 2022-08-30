import { Box, useMantineTheme } from '@mantine/core'
import { useSidebarContext } from '../context/SidebarContext'
import SideBar from './SideBar'
import SubSideBar from './SubSideBar'

export default function SideBarWrapper({ height }: { height: number }) {
  const { sideBarShowing, subSideBarLabel } = useSidebarContext()
  const theme = useMantineTheme()
  return sideBarShowing ? (
    <Box
      sx={{
        position: 'absolute',
        top: 50,
        left: 0,
        display: 'flex',
        zIndex: 999,
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          position: 'fixed',
          top: 50,
          left: 0,
        },
      }}
    >
      <SideBar height={height} />
      {subSideBarLabel && <SubSideBar height={height} />}
    </Box>
  ) : null
}
