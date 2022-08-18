import { INote, INoteData } from '../types/types'

export default function useGetAllNotes(totalData: INoteData[]) {
  const notes = totalData.reduce(
    (acc: INote[], data: INoteData) => [...acc, ...data.notes],
    [],
  )
  return notes
}
