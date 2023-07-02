import Cartoon from "@/components/Cartoon/Cartoon";
import Slider from "@/components/Slider";
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import Twitter from "@/icons/Twitter.svg";
import LinkedIn from "@/icons/LinkedIn.svg";
import GitHub from "@/icons/GitHub.svg";
import Link from "next/link";
import { PropsHome } from "@/types/types";
import facturador from './imgs/facturador.png'
import dashboard from './imgs/dash-libellum.png'

export default async function Home({ params }: PropsHome) {
  const { lang } = params;

  const dict = await getDictionary(lang);

  return (
    <section className="mt-5 grid grid-cols-2 max-md:grid-cols-1">
      <div className="
        w-4/5 flex justify-center rounded-full mb-5 
        bg-gradient-to-bl from-blue-aqua from-20% to-green-pistache 
        max-md:w-full max-md:col-span-2"
      >
        <Cartoon />
      </div>
      <div className="grid content-center mb-5 md:pr-10 max-md:mt-8">
        <p className="text-blue-sky">{dict.about.me}</p>
        <p className="mt-4">{dict.about.me2}</p>
        <p className="mt-4 text-blue-aqua">{dict.about.me3}</p>
        <ul className="list-none mt-4 flex gap-4">
          <li>
            <Link href="https://twitter.com/felizxhgf" target="blank">
              <Image src={Twitter} alt="Twitter" width={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/fel-isidro-98b8aa225"
              target="blank"
            >
              <Image src={LinkedIn} alt="LinkedIn" width={26} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Felizxfell" target="blank">
              <Image src={GitHub} alt="GitHub" width={26} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center my-14 col-span-2 max:col-span-1">
        <Slider />
      </div>

      <div className="mx-5 my-10 grid content-center max-md:col-span-2">
        <h2 className="text-center mb-4 max-md:mb-4">
          {dict.about.skillH2}
        </h2>
        <div className="max-md:mb-8 text-blue-aqua">
          <p>{dict.about.skills}</p>
        </div>
      </div>
      <div className="my-10 md:px-16 max-md:col-span-2">
        <ul
          className="my-5 list-none text-left grid gap-y-4
                      [&>*]:rounded-md [&>*]:flex [&>*]:justify-between [&>*]:px-4 [&>*]:py-1
                      [&>*:nth-child(odd)]:bg-slate-700 [&>*:nth-child(odd)]:text-blue-sky
                      [&>*:nth-child(even)]:bg-blue-aqua [&>*:nth-child(even)]:text-black"
        >
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>.Net Core</span>
            <span>{dict.about.liNet}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>ASP Net</span>
            <span>{dict.about.liAsp}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>Laravel</span>
            <span>{dict.about.liLaravel}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>React JS</span>
            <span>{dict.about.liReact}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>SQL Server</span>
            <span>{dict.about.liSqlServer}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>PostgreSQL</span>
            <span>{dict.about.liPostgres}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>GitHub</span>
            <span>{dict.about.liGit}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>Tailwindcss</span>
            <span>{dict.about.liTailwind}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>Bootstrap</span>
            <span>{dict.about.liBoots}</span>
          </li>
          <li className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span>MySql</span>
            <span>{dict.about.liMysql}</span>
          </li>
        </ul>
      </div>

      <div className="my-10 p-5 col-span-2">
        <h2 className="text-center mt-8 mb-4">
          {dict.about.projectsH2}
        </h2>
        <p className="mb-5 text-blue-aqua">
          {dict.about.projects}
        </p>
        <div className="
          grid gap-6 grid-cols-3 
          [&>*]:p-5 [&>*]:rounded-md [&>*]:border-4 [&>*]:grid [&>*]:justify-items-center
          [&>*:nth-child(even)]:border-emerald-400 [&>*:nth-child(odd)]:border-slate-700
          [&>div>figure]:border-4 [&>div>figure]:rounded-md [&>div>figure]:border-blue-aqua
          [&>div>figure]:flex [&>div>figure]:justify-center
          [&>div>p]:mt-5 [&>div>p]:text-blue-sky
          max-md:grid-cols-1
        ">
          <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <figure>
              <Image src={facturador} alt="facturador" width={300} height={300} />
            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
          <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <figure>
              <Image src={dashboard} alt="dashboard" width={300} height={300} />
            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
          <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <figure>

            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
          <div>
            <figure>

            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
          <div>
            <figure>

            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
          <div>
            <figure>

            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
              Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
