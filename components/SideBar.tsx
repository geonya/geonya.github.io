import Link from 'next/link'
import { notebooks } from '../data/notebooksData'
import { useSideBarContext } from '../lib/SideBarContext'

export default function SideBar() {
	const sideBarContext = useSideBarContext()
	return (
		<div className="full overflow-y-auto">
			<ul className="">
				<h3 className="text-sm font-semibold">All Notes +</h3>
				<h3 className="text-sm font-semibold">Notebooks +</h3>
				{notebooks.map((notebook, i) => (
					<li key={i} className="cursor-pointer">
						<Link href={`/${notebook.slug}`}>
							<a className="text-sm font-light">{notebook.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<ul className="mt-24">
				<h3 className="text-sm font-semibold">Tags +</h3>
			</ul>
		</div>
	)
}
