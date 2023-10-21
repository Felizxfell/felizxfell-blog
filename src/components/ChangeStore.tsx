'use client'

import { useStore } from "@/store"
import { useEffect } from "react";

type Props = {
    show: boolean
}

export default function ChangeStore({ show }: Props) {
    const toggleVisible = useStore(state => state.toggleVisible)

    useEffect(() => {
        toggleVisible(show)
    }, [toggleVisible, show])

    return (
        <></>
    )
}
