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
            <div className="p-2 rounded-md bg-slate-700 mb-8 md:w-2/3">
                <p className="p-4 rounded-2xl text-blue-aqua bg-shadow">
                    {dict.about.projects}
                </p>
            </div>
            <div className="grid gap-6 grid-cols-3 max-md:grid-cols-1 text-sm leading-5 text-slate-200
                    [&>*]:p-4 [&>*]:rounded-md [&>*]:grid [&>*]:justify-items-center [&>*]:h-fit
                    [&>*]:bg-green-pistache
                    [&>div>picture]:rounded-md [&>div>picture]:flex [&>div>picture]:justify-center
                    [&>div>p]:mt-5 [&>div>p]:p-2 [&>div>p]:rounded-2xl [&>div>p]:bg-slate-800
            ">
                <div className="ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <picture>
                        <Image src={facturador} alt="facturador" width={300} height={150} />
                    </picture>
                    <p>
                    Realice la actualización de todo el sistema de Libellum CFDI a la nueva versión de timbrado del SAT 4.0.
                    Implemente todas las nuevas reglas y estuve a cargo del mantenimiento del mismo solventando cualquier tipo de bug o
                    fallo y realizando implementación de servicios externos.

                    </p>
                </div>
                <div className="ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <picture>
                        <Image src={dashboard} alt="dashboard" width={300} height={150} />
                    </picture>
                    <p>
                    Desarrolle el proyecto Libellum Dashboard el cual muestra toda la actividad de facturación y venta de todas las sucursales de una franquicia.
                    Identifica por colores de un semáforo el flujo de trabajo de una sucursal y detecta anomalías.
                    </p>
                </div>                
            </div>
        </section>
    )
}
