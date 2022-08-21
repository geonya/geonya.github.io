export interface ITag {
  name: string
  slug: string
}

export interface INote {
  title: string
  slug: string
  notebook: string
  tags: ITag[] = []
  createdAt: string
}
