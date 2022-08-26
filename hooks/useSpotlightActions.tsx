import { SpotlightAction } from '@mantine/spotlight'
import { IconFileText } from '@tabler/icons'
import { useRouter } from 'next/router'
import { INote } from '../types/types'
export default function useSpotlightActions(notes: INote[]): SpotlightAction[] {
  const router = useRouter()
  return notes.map((note) => ({
    title: note.title,
    description: note.tags.map((tag) => tag.name).join(' / '),
    onTrigger: () => router.push(`/notes/${note.slug}`),
    icon: <IconFileText size={18} />,
    content: note.content,
  }))
}
