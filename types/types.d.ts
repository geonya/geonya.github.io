export interface Tag {
  tag: string
  slug: string
}

export interface INote {
  title: string
  slug: string
  notebook: string
  tag?: Tag[]
  createdAt: string
}
