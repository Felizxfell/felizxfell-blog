import Example from '@/blogs/example1.mdx'

type Props = {
  params: {
    uid?: string
    lang: string
  }
}

export default async function Posts({ params }: Props) {
  const { uid, lang } = params
  return (
    <>      
      <article 
        className='
        prose prose-zinc
        text-blue-sky
          prose-h1:text-blue-aqua
          prose-h2:text-emerald-400
          prose-blockquote:text-emerald-600
          prose-strong:text-emerald-400
          prose-a:text-slate-200'
      >
        <Example />
      </article>
    </>
  )
}
