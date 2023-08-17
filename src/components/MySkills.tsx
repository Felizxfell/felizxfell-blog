
type Props = {
    dict: any
}

export default function MySkills({ dict }: Props) {
    return (
        <>
            <section className="mx-5 my-10 grid content-center max-md:col-span-2">
                <h2 className="font-extrabold text-3xl md:text-center mb-4 max-md:mb-4">
                    {dict.about.skillH2}
                </h2>
                <div className="max-md:mb-8 text-blue-aqua">
                    <p>{dict.about.skills}</p>
                </div>
            </section>
            <section className="md:my-10 md:px-16 max-md:col-span-2">
                <ul className="my-5 list-none text-left grid gap-y-4
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
            </section>
        </>
    )
}
