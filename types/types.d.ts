interface INoteBooksData {
	id: string
	title: string
	notes: string[]
}

interface INotesData {
	id: string
	notebookId: string
	title: string
	createdAt: string
	tags: string[]
}
