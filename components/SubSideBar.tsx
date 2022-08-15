import { notesData } from '../data/notebooksData'

export default function SubSideBar() {
	return (
		<div>
			{notesData.map((note, i) => (
				<div key={i}>{note.title}</div>
			))}
		</div>
	)
}
