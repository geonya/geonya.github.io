export interface ITag {
  name: string
  slug: string
}

export interface INote {
  title: string
  slug: string
  notebook: string
  tags: ITag[] = []
  content: string
  createdAt: string
}

export interface IFrontData {
  title: string
  tags: string[]
  notebook: string
  createdAt: string
}

export interface PageProps {
  totalNotes: INote[]
  frontData: IFrontData
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

export type PropsType = { children?: React.ReactNode; className?: string }
