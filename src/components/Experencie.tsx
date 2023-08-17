
type Props = {
    dict: any
}

export default function Experencie({ dict }: Props) {
  return (
    <section className="col-span-2 my-10">
        <h2 className="font-extrabold text-3xl text-center">{dict.about.expH2}</h2>
        <div></div>
    </section>
  )
}
