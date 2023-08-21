import kachimushi from '@/assets/imgs/about/logo_kachimushi.png'
import GupoSalinas from '@/assets/imgs/about/LogoGS-main.svg'
import Image from 'next/image'

type Props = {
  dict: any
}

export default function Experencie({ dict }: Props) {
  return (
    <section className="p-4 col-span-2 my-5" aria-label="experencie">
      <h2 className="mb-5 font-extrabold text-3xl text-center">
        {dict.about.expH2}
      </h2>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 text-slate-200
        [&>*]:p-2 [&>*]:rounded-md [&>*]:bg-green-sheet
        [&>div>*]:list-disc 
        [&>div>ul>*]:mx-4"
      >
        <div className="h-fit [&>*]:p-2 [&>*]:rounded-2xl grid gap-2">
          <p className="text-black bg-slate-200 w-fit">
            Kachimuchi, 02-2020 - 01-2023
          </p>
          <picture className='flex justify-center'>
            <Image src={kachimushi} alt="kachimushi" className='p-2 rounded-lg bg-white' />
          </picture>
          <ul className="bg-slate-800 grid gap-4 text-sm leading-5 [&>*:nth-child(even)]:text-emerald-400">
            <li>
              Realice el mantenimiento del sistema de facturación electrónica Libellum. Hice la actualización a la versión CFDI 4.0 en ASP Net y Net Framework con consumo de servicios de facturación a través de servicios Web SOAP y API.
            </li>
            <li>
              Cree el Micro Servicio que automatiza los procesos de facturas globales usando .Net Core consumiendo los Web Services. Se optimizó la subida de datos a la mitad de tiempo.
            </li>
            <li>
              Mantenimiento a la Base de Datos con Mysql usando Stored Procedures, Views, Funciones y  Subconsultas avanzadas.
            </li>
            <li>
              Análisis y diseño de base de datos con Postgresql y diseño de software para Libellum suite usando Laravel con React js y Tailwindcss para el diseño.
            </li>
            <li>
              Creé la aplicación web Libellum Dashboard el cual muestra todas las sucursales de una franquicia que monitorea las facturas realizadas durante cierto tiempo y las pinta dependiendo si se hicieron o no facturas.
            </li>
            <li>
              Contribuí en el backend y frontend de una aplicación web para un restaurante en el cual se realizan los pedidos de productos, envío de mensajes, orden de compra, y pago de productos.
            </li>
          </ul>
        </div>
        <div className="h-fit [&>*]:p-2 [&>*]:rounded-2xl grid gap-2 bg-gradient-to-r">
          <p className="text-black bg-slate-200 w-fit">
            Grupo Salinas, 02-2023 - Actualidad
          </p>
          <picture className='flex justify-center'>
            <Image src={GupoSalinas} alt="GupoSalinas" className='p-2 rounded-lg bg-white' width={165} />
          </picture>
          <ul className=" bg-slate-800 grid gap-4 text-sm leading-5 [&>*:nth-child(even)]:text-emerald-400">
            <li>
              Realice el mantenimiento del sistema de facturación electrónica Libellum. Hice la actualización a la versión CFDI 4.0 en ASP Net y Net Framework. Creó integraciones con terceros para consumo de servicios de facturación a través de servicios Web SOAP y API usando
            </li>
            <li>
              Cree el Micro Servicio que automatiza los procesos de facturas globales usando .Net Core. Se consumen los Web Services que detonan el proceso. Se optimizó la subida de datos a la mitad de tiempo.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
