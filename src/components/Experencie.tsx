import Image from 'next/image'

type Props = {
  dict: any
}

export default function Experencie({ dict }: Props) {
  return (
    <section className="p-4 col-span-2 my-5" aria-label="experencie">
      <h2 className="mb-5 font-extrabold text-3xl text-center">
        {dict.about.expH2}
      </h2>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 text-slate-200
        [&>*]:p-2 [&>*]:rounded-md [&>*]:bg-green-sheet
        [&>div>*]:list-disc 
        [&>div>ul>*]:mx-4"
      >
        <div className="h-fit [&>*]:p-2 [&>*]:rounded-2xl grid gap-2">
          <p className="text-black bg-slate-200 w-fit">
            {dict.about.expworkt1}
          </p>
          <picture className='flex justify-center'>
            <Image src="/imgs/logo_kachimushi.png" width={200} height={200} alt="kachimushi" className='p-2 rounded-lg bg-white' />
          </picture>
          <ul className="grid gap-4 text-sm leading-5 bg-slate-800 [&>*:nth-child(even)]:text-emerald-400">
            <li>
              {dict.about.lik1}
            </li>
            <li>
              {dict.about.lik2}
            </li>
            <li>
              {dict.about.lik3}
            </li>
            <li>
              {dict.about.lik4}
            </li>
            <li>
              {dict.about.lik5}
            </li>
            <li>
              {dict.about.lik6}
            </li>
          </ul>
        </div>
        <div className="h-fit [&>*]:p-2 [&>*]:rounded-2xl grid gap-2 bg-gradient-to-r">
          <p className="text-black bg-slate-200 w-fit">
          {dict.about.expworkt2}
          </p>
          <picture className='flex justify-center'>
            <Image src="/imgs/LogoGS.svg" alt="GupoSalinas" className='p-2 rounded-lg bg-white' width={166} height={166} />
          </picture>
          <ul className="grid gap-4 text-sm leading-5 bg-slate-800 [&>*:nth-child(even)]:text-emerald-400">
            <li>
              {dict.about.ligs1}
            </li>
            <li>
              {dict.about.ligs2}
            </li>
            <li>
              {dict.about.ligs3}
            </li>
            <li>
              {dict.about.ligs4}
            </li>
            <li>
              {dict.about.ligs5}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
