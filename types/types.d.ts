export interface ITag {
  tag: string
  slug: string
}

export interface INote {
  title: string
  slug: string
  notebook: string
  tag?: ITag[]
  createdAt: string
}
