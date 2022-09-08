import { Box, Group, ScrollArea, Text, useMantineTheme } from '@mantine/core'
import { IconFolder, IconTag } from '@tabler/icons'
import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { useSidebarContext } from '../context/SidebarContext'
import extractTags from '../lib/extractTags'
import { Resizable } from '../lib/layout-resizable'
import MyIconAboutMe from './icons/MyIconAboutMe'
import MyIconGithub from './icons/MyIconGithub'
import MyIconInstagram from './icons/MyIconInstagram'

export default function SideBar({ height }: { height: number }) {
  const { totalNotes } = useNoteContext()
  const { saveSubSideBarLabel } = useSidebarContext()
  const tags = extractTags(totalNotes)
  const theme = useMantineTheme()
  return (
    <Resizable
      defaultSize={{
        width: 180,
        height,
      }}
      maxWidth={300}
      minWidth={110}
    >
      <ScrollArea
        p={10}
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(56,56,56,0.6)',
          backdropFilter: 'blur(4px)',
          borderRadius: theme.radius.sm,
          border: 'none',
          overflowY: 'scroll',
          height: height,
          color: theme.colors.gray[2],
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            height: height - 80,
          },
        }}
      >
        <Box
          sx={{
            marginBottom: 200,
          }}
        >
          <Text
            sx={{
              fontSize: theme.fontSizes.md,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 10,
            }}
            onClick={() =>
              saveSubSideBarLabel({
                type: 'note',
                title: ALL_NOTES,
              })
            }
          >
            All Notes +
          </Text>
          {totalNotes.map(({ notebook }, i) =>
            notebook === '' ? null : (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 3,
                }}
              >
                <IconFolder
                  size={20}
                  style={{ flexShrink: 0, marginRight: 2 }}
                />
                <Text
                  sx={{
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.gray[3],
                  }}
                  onClick={() =>
                    saveSubSideBarLabel({
                      type: 'note',
                      title: notebook,
                    })
                  }
                >
                  {notebook}
                </Text>
              </Box>
            ),
          )}
        </Box>
        <Box>
          <Text
            sx={{
              fontSize: theme.fontSizes.md,
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: 5,
            }}
          >
            Tags +
          </Text>
          {tags.map((tag, i) => (
            <Box
              key={i}
              sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginBottom: 3,
              }}
            >
              <IconTag size={20} style={{ flexShrink: 0, marginRight: 2 }} />
              <Text
                sx={{
                  fontSize: theme.fontSizes.sm,
                }}
                onClick={() =>
                  saveSubSideBarLabel({ type: 'tag', title: tag.name })
                }
              >
                {tag.name}
              </Text>
            </Box>
          ))}
        </Box>
        <Group
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 40,
            backgroundColor: theme.colors.dark[6],
            borderTopRightRadius: theme.radius.md,
            borderTopLeftRadius: theme.radius.md,
          }}
          position='center'
        >
          <MyIconAboutMe />
          <MyIconGithub />
          <MyIconInstagram />
        </Group>
      </ScrollArea>
    </Resizable>
  )
}
