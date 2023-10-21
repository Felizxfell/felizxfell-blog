'use client'

import IconChevronUp from '@/icons/IconChevronUp'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function ScrollTop() {
    const pathname = usePathname()
    return (
        <Link 
            href={pathname} 
            className="fixed rounded-full p-4 bottom-4 right-4 opacity-70 bg-slate-200 hover:opacity-100"
            scroll={true}
        >
            <IconChevronUp />
        </Link>
    )
}
