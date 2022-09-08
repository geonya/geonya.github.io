import { Group, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import { useSpotlight } from '@mantine/spotlight'
import { IconSearch } from '@tabler/icons'
import { useNoteContext } from '../context/NoteContext'
import useIsDark from '../hooks/useIsDark'
import useSpotlightActions from '../hooks/useSpotlightActions'

export default function Search() {
  const { totalNotes } = useNoteContext()
  const spotlight = useSpotlight()
  const actions = useSpotlightActions(totalNotes)
  const theme = useMantineTheme()
  const isDark = useIsDark()
  return (
    <Group
      py={5}
      px={10}
      sx={{
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
          width: '100%',
          maxWidth: 240,
        },
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
          width: '100%',
          maxWidth: 240,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          width: '100%',
        },
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: 30,
          height: 30,
          borderRadius: '50%',
        },
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: isDark ? theme.colors.dark[4] : theme.colors.gray[1],
        borderRadius: theme.radius.md,
        cursor: 'pointer',
        border: `1px solid ${
          isDark ? theme.colors.dark[3] : theme.colors.dark[0]
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
      <IconSearch size={16} style={{ flexShrink: 0 }} />
      <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
        <Text sx={{ fontSize: theme.fontSizes.xs }}>Search</Text>
      </MediaQuery>
      <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
        <Text sx={{ fontSize: theme.fontSizes.xs, whiteSpace: 'nowrap' }}>
          ⌘ + K
        </Text>
      </MediaQuery>
    </Group>
  )
}
