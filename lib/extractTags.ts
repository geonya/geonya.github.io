import { INote, ITag } from '../types/types'

export default function extractTags(notes: INote[]) {
  const tags = notes?.map((note) => note?.tags || []).flat()
  const filteredTags = tags.reduce<ITag[]>(
    (prevTags, currentTag) =>
      prevTags.filter((tag) => tag.slug === currentTag.slug).length === 0
        ? [currentTag, ...prevTags]
        : prevTags,
    [],
  )
  return filteredTags
}
