import { Box, Center, ScrollArea, Text, useMantineTheme } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { IconChevronsLeft, IconFileText } from '@tabler/icons'
import { useSidebarContext } from '../context/SidebarContext'
import useGetNotes from '../hooks/useGetNotes'
import { Resizable } from '../lib/layout-resizable'

export default function SubSideBar() {
  const { toggleSideBar, subSideBarLabel, saveSubSideBarLabel } =
    useSidebarContext()
  const theme = useMantineTheme()
  const notes = useGetNotes(subSideBarLabel)
  const onDismiss = () => saveSubSideBarLabel(null)
  return (
    <Resizable
      defaultSize={{
        width: 180,
        height: '100%',
      }}
      maxWidth={300}
      minWidth={110}
    >
      <ScrollArea
        p={10}
        sx={{
          backgroundColor: theme.fn.rgba(theme.colors.dark[6], 0.7),
          backdropFilter: 'blur(4px)',
          borderRadius: theme.radius.sm,
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
            <IconFileText
              size={18}
              style={{ flexShrink: 0, marginRight: 10 }}
            />
            <Text sx={{ fontSize: theme.fontSizes.xs }}>{note.title}</Text>
          </Text>
        ))}
      </ScrollArea>
    </Resizable>
  )
}
