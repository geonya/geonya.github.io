class Notebook {
	public slug: string
	constructor(public title: string) {
		title
		this.slug = this.title.replace(' ', '-')
	}
}

export const notebooks = [new Notebook('React js'), new Notebook('Next js')]
