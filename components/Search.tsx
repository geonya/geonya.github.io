import { Button, Center } from '@mantine/core'
import { SpotlightAction, useSpotlight } from '@mantine/spotlight'
import { IconFileText } from '@tabler/icons'
import { useNoteContext } from '../context/NoteContext'
import useSpotlightActions from '../hooks/useSpotlightActions'
import getTotalNotes from '../lib/getTotalNotes'

export default function Search() {
  const { totalNotes } = useNoteContext()
  const spotlight = useSpotlight()
  const actions = useSpotlightActions(totalNotes)
  return (
    <Center>
      <Button
        onClick={() => {
          spotlight.openSpotlight()
          spotlight.registerActions(actions)
        }}
      >
        Search
      </Button>
    </Center>
  )
}
