import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface SearchFormValues {
  keyword: string
}

export default function Search() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<SearchFormValues>()
  const onValid = ({ keyword }: SearchFormValues) => {
    router.push(`/search?keyword=${keyword}`)
  }
  return (
    <form className='w-full' onSubmit={handleSubmit(onValid)}>
      <label className='relative'>
        <span className='absolute top-0 bottom-0 my-auto left-2'>🔎</span>
        <input
          className='appearance-none w-full focus:outline-none border border-gray-800 focus:ring focus:ring-blue-400/[0.5] rounded-full bg-gray-700 px-5 pl-8 py-1 text-sm'
          type='text'
          placeholder='search'
          {...register('keyword', {
            required: '검색어를 입력해주세요',
            minLength: {
              value: 2,
              message: '2글자 이상 검색해주세요.',
            },
          })}
        />
      </label>
    </form>
  )
}
