export const notebooksData: INoteBooksData[] = [
	{
		id: '1',
		title: 'React.js',
		notes: ['1', '2', '3']
	},
	{
		id: '2',
		title: 'Next.js',
		notes: ['4', '5', '6']
	}
]

export const notesData: INotesData[] = [
	{
		id: '1',
		notebookId: '1',
		title: '리액트를 공부하자',
		createdAt: '220809',
		tags: ['react', 'study']
	},
	{
		id: '2',
		notebookId: '2',
		title: 'Next.js 완전 정복',
		createdAt: '220809',
		tags: ['nextjs', 'study']
	}
]
