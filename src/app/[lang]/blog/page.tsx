import Link from "next/link";

type Props = {
  params: {
    lang: string
  }
}

export default function Blog({ params }: Props) {
  const { lang } = params
  return (
    <article className="grid grid-rows-1 md:px-12">
      <div className="my-8 divide-x-[1px] divide-slate-500">
        <section>
          <h2 className="text-2xl font-bold text-blue-aqua md:w-3/4">Writing on software design, company building, and the aerospace industry. { lang }</h2>
          <p className="mt-5 mb-8 md:w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel neque, beatae laborum quaerat, nobis soluta nostrum autem possimus explicabo, labore officiis doloremque nam hic itaque accusantium dolores architecto voluptas reprehenderit!</p>
        </section>
        <section className="flex items-start">
          <div className="pt-5 md:w-80">
            <p className="max-md:ml-3 ml-5 text-sm text-emerald-600">
              September 5, 2022
            </p>
          </div>
          <div className="max-md:ml-3 ml-10 p-5 grid gap-2 mb-5 rounded-lg hover:bg-zinc-800">
            <strong className="text-blue-aqua">
              Crafting a design system for a multiplanetary future
            </strong>
            <p className="text-blue-sky mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laborum dolorum distinctio voluptatem culpa unde ipsa doloribus debitis quaerat, dicta architecto minus ad saepe sequi illum. Porro praesentium dolor voluptas!
            </p>
            <Link className="text-white w-fit" href={`/${lang}/blog/09dd50f1-62b3-4ba1-a891-0546aac6f0ac`}>
              {`Read posts >`}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
