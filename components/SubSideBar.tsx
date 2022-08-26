import {
  Box,
  Center,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconChevronsLeft } from '@tabler/icons'
import { useSidebarContext } from '../context/SidebarContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { toggleSideBar, subSideBarLabel, saveSubSideBarLabel } =
    useSidebarContext()
  const theme = useMantineTheme()
  const notes = useGetNotes(subSideBarLabel)
  const onDismiss = () => saveSubSideBarLabel(null)
  return (
    <Navbar
      p={10}
      sx={{
        backgroundColor: 'rgba(23,23,23,0.6)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Navbar.Section
        sx={{
          color: theme.colors.gray[2],
          fontSize: theme.fontSizes.md,
          fontWeight: 600,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>{subSideBarLabel?.title}</Text>
          <Center
            sx={{ cursor: 'pointer', width: 23, height: 23, marginRight: 5 }}
            onClick={() => onDismiss()}
          >
            <IconChevronsLeft />
          </Center>
        </Box>
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} p={5}>
        {notes.map((note, i) => (
          <Box
            key={i}
            component={NextLink}
            href={`/notes/${note.slug}`}
            sx={{ cursor: 'pointer', fontSize: theme.fontSizes.sm }}
            onClick={() => toggleSideBar()}
          >
            {note.title}
          </Box>
        ))}
      </Navbar.Section>
    </Navbar>
  )
}
