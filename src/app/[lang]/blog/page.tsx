export default function Blog() {
  return (
    <article className="grid grid-rows-1 md:px-12">
      <div className="my-8 divide-x-[1px] divide-slate-500">
        <section>
          <h2 className="text-2xl font-bold text-blue-aqua md:w-3/4">Writing on software design, company building, and the aerospace industry.</h2>
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
            <a className="text-white w-fit" href="">{`Read article >`}</a>
          </div>
        </section>
      </div>
    </article>
  );
}
