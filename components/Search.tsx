import { Button, Center } from '@mantine/core'
import { useSpotlight } from '@mantine/spotlight'
import { useNoteContext } from '../context/NoteContext'
import useSpotlightActions from '../hooks/useSpotlightActions'

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
