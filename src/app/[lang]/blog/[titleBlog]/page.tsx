import ChangeStore from '@/components/ChangeStore'
import ChevronLeft from '@/icons/ChevronLeft'
import Link from 'next/link'
import dynamic from 'next/dynamic'

type Props = {
  params: {
    titleBlog?: string
    lang: string
  }
}

export default async function PostsPage({ params }: Props) {
  const { titleBlog, lang } = params

  const DynamicBlog = dynamic(() => import(`@/blogs/${titleBlog}.mdx`), {
    loading: () => <p>Loading...</p>,
  })

  return (
    <article className='flex justify-center' role='blogs' aria-label='list of blogs'>
      <ChangeStore show={false} />
      <section
        className='prose prose-zinc text-blue-sky w-full
            prose-p:leading-6
          prose-h1:text-lemon
          prose-h2:text-blue-aqua
          prose-h3:text-emerald-400
          prose-blockquote:text-emerald-600
          prose-strong:text-emerald-400
          prose-a:text-slate-200
          prose-em:text-emerald-400'
      >
        <Link
          className="text-white w-fit flex no-underline hover:text-emerald-400"
          href={`/${lang}/blog`}
        >
          <span className='mt-[3px]'> <ChevronLeft /> </span> Back To Posts
        </Link>
        <DynamicBlog />
      </section>
    </article>
  )
}
