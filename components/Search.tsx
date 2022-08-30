import { Group, Text, useMantineTheme } from '@mantine/core'
import { useSpotlight } from '@mantine/spotlight'
import { IconSearch } from '@tabler/icons'
import { useNoteContext } from '../context/NoteContext'
import useSpotlightActions from '../hooks/useSpotlightActions'

export default function Search() {
  const { totalNotes } = useNoteContext()
  const spotlight = useSpotlight()
  const actions = useSpotlightActions(totalNotes)
  const theme = useMantineTheme()
  return (
    <Group
      py={5}
      px={7}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[1],
        borderRadius: theme.radius.md,
        cursor: 'pointer',
        border: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[3]
            : theme.colors.dark[0]
        }`,
        '&:hover': {
          opacity: 0.5,
        },
      }}
      onClick={() => {
        spotlight.openSpotlight()
        spotlight.registerActions(actions)
      }}
    >
      <IconSearch size={15} />
      <Text sx={{ fontSize: theme.fontSizes.xs }}>Search</Text>
      <Text sx={{ fontSize: theme.fontSizes.xs }}>⌘ + K</Text>
    </Group>
  )
}
