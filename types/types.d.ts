export interface Tag {
  tag: string
  slug: string
}

export interface INoteData {
  notebook: INotebook
  notes: INote[]
}

export interface INotebook {
  title: string
  slug: string
}
export interface INote {
  title: string
  slug: string
  tag?: Tag[]
}
