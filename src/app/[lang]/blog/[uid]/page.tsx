import Example from '@/blogs/example1.mdx'

type Props = {
  params: {
    uid?: string
    lang: string
  }
}

export default async function PostsPage({ params }: Props) {
  const { uid, lang } = params
  return (
    <article className='flex justify-center'>
      <section
        className='prose prose-zinc text-blue-sky w-full
          prose-h1:text-lemon
          prose-h2:text-blue-aqua
          prose-h3:text-emerald-400
          prose-blockquote:text-emerald-600
          prose-strong:text-emerald-400
          prose-a:text-slate-200
          prose-em:text-emerald-400
            prose-p:leading-6'
      >
        <Example />
      </section>
    </article>
  )
}
