import Cartoon from "@/components/Cartoon/Cartoon";
import Twitter from "@/icons/Twitter.svg";
import LinkedIn from "@/icons/LinkedIn.svg";
import GitHub from "@/icons/GitHub.svg";
import Email from "@/icons/IconEmail.svg";
import Link from "next/link";
import Image from "next/image";

type Props = {
    dict: any
}

export default function MeInfo({ dict }: Props) {
    return (
        <>
            <section className="mb-5 flex justify-center max-md:w-full max-md:col-span-2" aria-label="imagen-user">
                <div className="flex justify-center w-4/5 rounded-full bg-gradient-to-bl from-blue-aqua from-20% to-green-pistache">
                    <Cartoon />
                </div>
            </section>
            <section className="grid content-center mb-5 md:pr-3 max-md:mt-8" aria-label="me-info">
                <div className="p-2 rounded-md bg-slate-700">
                    <div className="p-4 rounded-2xl bg-shadow">
                        <p className="text-blue-sky">{dict.about.me}</p>
                        <p className="mt-4">{dict.about.me2}</p>
                        <p className="mt-4 text-blue-aqua">{dict.about.me3}</p>
                    </div>
                </div>
                <ul className="list-none mt-4 ml-4 flex gap-4">
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
                    <li>
                        <Link href="mailto:felizxhgf@gmail.com" target="blank">
                            <Image src={Email} alt="Email" width={26} />
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
