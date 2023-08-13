
type Props = {
  params: {
    uid: string
    lang: string
  }
}

export default function Article({ params }: Props) {
  const { uid, lang } = params
  return (
    <div>Articulo { uid } { lang }</div>
  )
}
