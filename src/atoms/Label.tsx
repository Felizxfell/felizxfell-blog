
type Props = {
  htmlFor: string
  text: string
}

export default function Label({ htmlFor, text }: Props) {
  return (
    <label className='pl-3 mb-1 hover:text-slate-100' htmlFor={htmlFor}>{text}</label>
  )
}
