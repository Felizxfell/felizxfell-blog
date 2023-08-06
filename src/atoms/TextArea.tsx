type Props = {
  id: string
  placeholder?: string
  cols?: number
  rows?: number
}

export default function TextArea({ id, placeholder, cols = 30, rows = 10 }: Props) {
  return (
    <textarea
      className='outline-none rounded-lg px-4 p-2 border-2 border-blue-aqua bg-slate-700 hover:bg-slate-800 text-white'
      name={id}
      id={id}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  )
}
