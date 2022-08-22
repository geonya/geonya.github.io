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
    <article className='full prose'>
      <section className='w-full'>
        <h1>{metaData?.title}</h1>
        <h2>CreatedAt : {metaData?.createdAt}</h2>
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
