import ChangeStore from "@/components/ChangeStore";
import ChevronRigth from "@/icons/ChevronRigth";
import BlogsJson from '@/blogs/mocks/blogs.json'
import Link from "next/link";
import type { Blogs } from "@/types/types";

type Props = {
  params: {
    lang: string
  }
}

export default async function BlogPage({ params }: Props) {
  const { lang } = params
  const blogs = BlogsJson as Blogs[];
  return (
    <article className="grid grid-rows-1 md:px-12">
      <ChangeStore show={true} />
      <div className="my-8 divide-x-[1px] divide-slate-500" role="blogslist" aria-label="list of blogs">
        <section>
          <h2 className="text-2xl font-bold text-blue-aqua md:w-3/4">Writing on software design, company building, and the aerospace industry. {lang}</h2>
          <p className="mt-5 mb-8 md:w-3/4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel neque, beatae laborum quaerat, nobis soluta nostrum autem possimus explicabo, labore officiis doloremque nam hic itaque accusantium dolores architecto voluptas reprehenderit!</p>
        </section>
        {blogs.map(blog => (
          <section className="flex items-start" key={blog.title}>
            <div className="pt-5 md:w-80">
              <p className="max-md:ml-3 ml-5 text-sm text-emerald-600">
                {blog.date}
              </p>
            </div>
            <div className="max-md:ml-3 ml-10 p-5 grid gap-2 mb-5 rounded-lg hover:bg-zinc-800">
              <strong className="text-blue-aqua">
                {blog.title}
              </strong>
              <p className="text-blue-sky mb-5">
                {blog.description}
              </p>
              <Link
                className="text-white w-fit flex justify-stretch hover:text-emerald-400"
                href={`/${lang}/blog/${blog.title}`}
              >
                Read posts <span className="mt-[2px]"> <ChevronRigth /> </span>
              </Link>
            </div>
          </section>
        ))
        }
      </div>
    </article>
  );
}
