import { Box, Navbar, ScrollArea, Text, useMantineTheme } from '@mantine/core'
import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { useSidebarContext } from '../context/SidebarContext'
import extractTags from '../lib/extractTags'

export default function SideBar() {
  const { totalNotes } = useNoteContext()
  const { saveSubSideBarLabel } = useSidebarContext()
  const tags = extractTags(totalNotes)
  const theme = useMantineTheme()
  return (
    <Navbar
      p={10}
      sx={{
        backgroundColor: 'rgba(56,56,56,0.5w)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Navbar.Section
        sx={{
          color: theme.colors.gray[2],
          fontSize: theme.fontSizes.md,
          fontWeight: 600,
          cursor: 'pointer',
        }}
        onClick={() =>
          saveSubSideBarLabel({
            type: 'note',
            title: ALL_NOTES,
          })
        }
      >
        All Notes +
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} p={5}>
        {totalNotes.map(({ notebook }, i) => (
          <Text
            key={i}
            sx={{ cursor: 'pointer', fontSize: theme.fontSizes.sm }}
            onClick={() =>
              saveSubSideBarLabel({
                type: 'note',
                title: notebook,
              })
            }
          >
            {notebook}
          </Text>
        ))}
      </Navbar.Section>
      <Navbar.Section
        sx={{
          color: theme.colors.gray[2],
          fontSize: theme.fontSizes.md,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Tags +
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} p={5}>
        {tags.map((tag, i) => (
          <Text
            key={i}
            sx={{ cursor: 'pointer', fontSize: theme.fontSizes.sm }}
            onClick={() =>
              saveSubSideBarLabel({ type: 'tag', title: tag.name })
            }
          >
            {tag.name}
          </Text>
        ))}
      </Navbar.Section>
    </Navbar>
  )
}
