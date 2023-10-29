
'use client'

import Button from "@/atoms/Button"
import ChevronLeft from "@/icons/ChevronLeft"
import IconArrowPath from "@/icons/IconArrowPath"
import Link from "next/link"
import { usePathname, useParams  } from 'next/navigation'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

type Params = {
    lang: string
}

export default function ErrorBlog({ error, reset }: Props) {    
    const params = useParams() as Params
        
    return (
        <section className="absolute top-2/4 right-2/4 translate-x-2/4 translate-y-[-50%] p-10">
            <Link
                className="text-white w-fit flex no-underline hover:text-emerald-400"
                href={`/${params.lang}/blog`}
            >
                <span className='mt-[3px]'> <ChevronLeft /> </span> Back To Posts
            </Link>
            <div className="flex flex-col p-1 mt-10">
                <h2 className="mb-10 text-center text-5xl font-bold">
                    !Uups, Algo salió mal!
                </h2>
                <span className="flex justify-center">
                    <Button method={() => reset()}>
                        <IconArrowPath />
                    </Button>
                </span>
            </div>
        </section>
    )
}
