import Link from "next/link";
import { usePathname } from "next/navigation";
import MarkIcon from "@/icons/MarkIcon"
import IconFoodpanda from "@/icons/IconFoodpanda";

type propsMenuModal = {
    handledToggle: () => void,
    links: {
        href: string;
        name: string;
        icon: (props?: React.SVGAttributes<SVGSVGElement>) => JSX.Element
    }[],
    lang: string
}

export const MenuModal = ({ handledToggle, links, lang }: propsMenuModal) => {
    const pathname = usePathname();

    return (
        <div
            className="rounded-lg p-6 fixed inset-x-3 top-7 z-20 transition duration-150 ease-in-out 
            bg-slate-700 shadow-lg shadow-slate-500/50 text-white"
        >
            <div className="flex justify-between">
                <IconFoodpanda />
                <div>
                    <button onClick={handledToggle}>
                        <MarkIcon />
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <ul className="grid gap-4 [&>*]:pt-4 [&>*]:pl-2 divide-y divide-slate-500">
                    {links.map((link) => {
                        link.href = link.href === "/" ? "" : link.href;

                        const isActive = pathname.localeCompare(`/${lang}${link.href}`);

                        return (
                            <li
                                key={link.name}
                                className={
                                    isActive
                                        ? `hover:text-emerald-400 hover:underline`
                                        : `text-emerald-400 underline`
                                }
                            >
                                <Link href={`/${lang}${link.href}`} className="flex gap-4">
                                    {link.icon()} {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
