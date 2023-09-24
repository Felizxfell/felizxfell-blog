
type Props = {
    dict: any
}

export default function MySkills({ dict }: Props) {
    return (
        <>
            <section className="mx-4 my-5 grid content-center max-md:col-span-2">
                <h2 className="font-extrabold text-3xl max-md:text-center mb-5 max-md:mb-4">
                    {dict.about.skillH2}
                </h2>
                <div className="p-2 rounded-md bg-slate-700">
                    <p className="p-4 rounded-2xl text-blue-aqua bg-shadow">
                        {dict.about.skills}
                    </p>
                </div>
            </section>
            <section className="md:my-5 md:px-8 max-md:col-span-2">
                <ul className="my-5 list-none text-left grid gap-y-4
                      [&>*]:rounded-xl [&>*]:flex [&>*]:justify-between [&>*]:px-4 [&>*]:py-1
                      [&>*:nth-child(odd)]:bg-slate-700 [&>*:nth-child(odd)]:text-blue-sky
                      [&>*:nth-child(even)]:bg-blue-aqua [&>*:nth-child(even)]:text-black"
                >
                    <li>
                        <span>.Net Core</span>
                        <span>{dict.about.liNet}</span>
                    </li>
                    <li>
                        <span>ASP Net</span>
                        <span>{dict.about.liAsp}</span>
                    </li>
                    <li>
                        <span>Laravel</span>
                        <span>{dict.about.liLaravel}</span>
                    </li>
                    <li>
                        <span>React JS</span>
                        <span>{dict.about.liReact}</span>
                    </li>
                    <li>
                        <span>SQL Server</span>
                        <span>{dict.about.liSqlServer}</span>
                    </li>
                    <li>
                        <span>PostgreSQL</span>
                        <span>{dict.about.liPostgres}</span>
                    </li>
                    <li>
                        <span>GitHub</span>
                        <span>{dict.about.liGit}</span>
                    </li>
                    <li>
                        <span>Tailwindcss</span>
                        <span>{dict.about.liTailwind}</span>
                    </li>
                    <li>
                        <span>Bootstrap</span>
                        <span>{dict.about.liBoots}</span>
                    </li>
                    <li>
                        <span>MySql</span>
                        <span>{dict.about.liMysql}</span>
                    </li>
                </ul>
            </section>
        </>
    )
}
