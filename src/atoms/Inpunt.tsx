type Props = {
  type: string
  id: string
  placeholder?: string
}

export default function Inpunt({ type, id, placeholder }: Props) {
  return (
    <input
      className='outline-none rounded-lg px-4 p-2 bg-slate-700 hover:bg-slate-800 text-white'
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
    />
  )
}
