import { Box, ScrollArea, Text, useMantineTheme } from '@mantine/core'
import { IconFolder, IconTag } from '@tabler/icons'
import { ALL_NOTES } from '../constants/notebook.constants'
import { useNoteContext } from '../context/NoteContext'
import { useSidebarContext } from '../context/SidebarContext'
import extractTags from '../lib/extractTags'
import { Resizable } from '../lib/layout-resizable'

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
          backgroundColor: 'rgba(56,56,56,0.5)',
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
          {totalNotes.map(({ notebook }, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 3,
              }}
            >
              <IconFolder size={20} style={{ flexShrink: 0, marginRight: 2 }} />
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
          ))}
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
      </ScrollArea>
    </Resizable>
  )
}
