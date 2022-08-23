import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useSidebarContext } from '../context/SidebarContext'
import { IMetaData, ITag } from '../types/types'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  metaData: IMetaData
}

export default function MDX({ source, metaData }: MDXProps) {
  const { toggleSideBar, saveSubSideBarLabel } = useSidebarContext()
  const onTagClick = (tagName: string) => {
    toggleSideBar(true)
    saveSubSideBarLabel({ type: 'tag', title: tagName })
  }
  return (
    <article className='full prose main-padding'>
      <section className='w-full'>
        <h2>{metaData?.title}</h2>
        <h4>{metaData?.createdAt}</h4>
        <div className='space-x-2'>
          {metaData?.tags?.map((tagName, i) => (
            <span
              key={i}
              className='cursor-pointer'
              onClick={() => onTagClick(tagName)}
            >
              {tagName}
            </span>
          ))}
        </div>
      </section>
      <section className='w-full'>
        <MDXRemote {...source} />
      </section>
    </article>
  )
}
