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
    <article className='full main-padding'>
      <section className='w-full mb-5 space-y-3'>
        <h2 className='text-gray-300 text-3xl font-medium'>
          {metaData?.title}
        </h2>
        <div className='flex space-x-3'>
          <h4 className='text-gray-400'>Geony</h4>
          <h4 className='text-gray-400'>{metaData?.createdAt}</h4>
        </div>
        <div className='space-x-2'>
          {metaData?.tags?.map((tagName, i) => (
            <span
              key={i}
              className='cursor-pointer px-2 py-1 bg-gray-500 text-gray-200 rounded-full'
              onClick={() => onTagClick(tagName)}
            >
              {tagName}
            </span>
          ))}
        </div>
      </section>
      <section className='prose prose-headings:text-gray-300 dark:prose-invert'>
        <MDXRemote {...source} />
      </section>
    </article>
  )
}
