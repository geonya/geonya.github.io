import { notebooksData } from '../data/notebooksData'

export default function SideBar() {
	return (
		<div>
			{notebooksData.map((notebook, i) => (
				<div key={i}>{notebook.title}</div>
			))}
		</div>
	)
}
