
type Props = {
  htmlFor: string
  text: string
  children?: React.ReactNode
}

export default function Label({ children, htmlFor }: Props) {
  return (
    <label className='pl-3 mb-1 hover:text-slate-100' htmlFor={htmlFor}>{children}</label>
  )
}
