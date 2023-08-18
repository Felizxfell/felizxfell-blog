import Image from "next/image";
import facturador from '@/assets/imgs/about/facturador.webp'
import dashboard from '@/assets/imgs/about/dash-libellum.webp'

type Props = {
    dict: any
}

export default function MyProjects({ dict }: Props) {
    return (
        <section className="my-5 p-2 col-span-2" aria-label="proyects">
            <h2 className="font-extrabold text-3xl mt-8 mb-5 max-md:text-center">
                {dict.about.projectsH2}
            </h2>
            <p className="mb-8 text-blue-aqua md:w-2/3">
                {dict.about.projects}
            </p>
            <div className="grid gap-6 grid-cols-3 max-md:grid-cols-1 leading-5 text-slate-200
                    [&>*]:p-4 [&>*]:rounded-md [&>*]:grid [&>*]:justify-items-center [&>*]:h-fit
                    [&>*]:bg-green-pistache
                    [&>div>picture]:rounded-md [&>div>picture]:flex [&>div>picture]:justify-center
                    [&>div>p]:mt-5 [&>div>p]:p-2 [&>div>p]:rounded-2xl [&>div>p]:bg-slate-800
            ">
                <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <picture>
                        <Image src={facturador} alt="facturador" width={300} height={150} />
                    </picture>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
                        Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
                    </p>
                </div>
                <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <picture>
                        <Image src={dashboard} alt="dashboard" width={300} height={150} />
                    </picture>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Molestiae corporis distinctio atque cumque illum hic vitae libero quibusdam porro vel!
                        Voluptatibus veniam in quasi magnam! Laudantium dicta itaque blanditiis impedit!...
                    </p>
                </div>
                <div className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <picture>

                    </picture>
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
