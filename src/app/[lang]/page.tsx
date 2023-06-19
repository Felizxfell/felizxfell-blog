import Cartoon from "@/components/Cartoon/Cartoon";
import Slider from "@/components/Slider";
import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import Twitter from "@/icons/Twitter.svg";
import LinkedIn from "@/icons/LinkedIn.svg";
import GitHub from "@/icons/GitHub.svg";
import Link from "next/link";
import { PropsHome } from "@/types/types";


export default async function Home({ params }: PropsHome) {
  const { lang } = params;

  const dict = await getDictionary(lang);

  return (
    <section className="mt-5 grid grid-cols-2 max-md:grid-cols-1">
      <div className="max-md:w-full w-4/5 flex justify-center rounded-full mb-5 bg-gradient-to-bl from-blue-aqua from-20% to-green-pistache">
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
      <div className="text-center my-10 col-span-2 max-md:col-span-1">
        <Slider />
      </div>

      <div className="mx-5 grid content-center">
        <h2 className="text-center mb-7 max-md:mb-4 ">{dict.about.skillH1}</h2>
        <div className="text-blue-sky max-md:mb-8">
          <p>{dict.about.skills}</p>
        </div>
      </div>
      <div className="md:px-16">
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
    </section>
  );
}
