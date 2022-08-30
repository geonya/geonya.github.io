import { Box, Center, Text, useMantineTheme } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconChevronsLeft, IconFileText } from '@tabler/icons'
import { useSidebarContext } from '../context/SidebarContext'
import useGetNotes from '../hooks/useGetNotes'

export default function SubSideBar() {
  const { toggleSideBar, subSideBarLabel, saveSubSideBarLabel } =
    useSidebarContext()
  const theme = useMantineTheme()
  const notes = useGetNotes(subSideBarLabel)
  const onDismiss = () => saveSubSideBarLabel(null)
  return (
    <Box
      p={10}
      sx={{
        color: theme.colors.gray[2],
        backgroundColor: 'rgba(23,23,23,0.6)',
        backdropFilter: 'blur(4px)',
        border: 'none',
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 600,
          marginBottom: 10,
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
      {notes.map((note, i) => (
        <Text
          key={i}
          component={NextLink}
          href={`/notes/${note.slug}`}
          sx={{
            width: '100%',
            cursor: 'pointer',
            fontSize: theme.fontSizes.sm,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 7,
          }}
          onClick={() => toggleSideBar()}
        >
          <IconFileText size={18} style={{ flexShrink: 0, marginRight: 2 }} />
          <Text sx={{ fontSize: theme.fontSizes.xs }}>{note.title}</Text>
        </Text>
      ))}
    </Box>
  )
}
