import Image from "next/image";
import facturador from '@/assets/imgs/facturador.png'
import dashboard from '@/assets/imgs/dash-libellum.png'

type Props = {
    dict: any
}

export default function MyProjects({ dict }: Props) {
    return (        
        <section className="my-10 p-5 col-span-2">
            <h2 className="text-center mt-8 mb-4">
                {dict.about.projectsH2}
            </h2>
            <p className="mb-8 text-blue-aqua">
                {dict.about.projects}
            </p>
            <div className="grid gap-6 grid-cols-3 
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
        </section>
    )
}
