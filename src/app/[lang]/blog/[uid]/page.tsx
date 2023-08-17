
type Props = {
  params: {
    uid: string
    lang: string
  }
}

export default function Posts({ params }: Props) {
  const { uid, lang } = params
  return (
    <article className="grid content-center">      
      <div className="text-blue-sky">
        <h1>Articulo {uid} {lang}</h1>
        <p>10 febrero 2023</p>
      </div>

      <p className="my-10 text-blue-aqua">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt beatae vel sit. Ad, debitis. Aperiam accusamus voluptatibus expedita provident magnam molestiae mollitia unde exercitationem laboriosam quae. Illum sapiente beatae maiores?</p>
      
      <strong>Un titulo al azar</strong>
    </article>
  )
}
