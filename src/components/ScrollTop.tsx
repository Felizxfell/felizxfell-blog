import IconChevronUp from '@/icons/IconChevronUp'
import Link from 'next/link'
import React from 'react'

export default function ScrollTop() {
    return (
        <Link 
            href="#html" 
            className="fixed rounded-full p-4 bottom-4 right-4 opacity-70 bg-slate-200 hover:opacity-100"
        >
            <IconChevronUp />
        </Link>
    )
}
