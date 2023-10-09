import { SVGAttributes } from "react";

export default function IconChevronUp(props: SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            {...props}    
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    )
}
