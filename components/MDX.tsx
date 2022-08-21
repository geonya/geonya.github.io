import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}

export default function MDX({ source }: MDXProps) {
  return (
    <div className='full prose prose-slate'>
      <MDXRemote {...source} />
    </div>
  )
}
