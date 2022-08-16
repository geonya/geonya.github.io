import Link from 'next/link'

export default function SubSideBar() {
	return (
		<ul className="full">
			{[].map((note, i) => (
				<li key={i} className="cursor-pointer">
					<Link href={`/notes/${note}`}>
						<a className="text-xs font-thin">{note}</a>
					</Link>
				</li>
			))}
		</ul>
	)
}
