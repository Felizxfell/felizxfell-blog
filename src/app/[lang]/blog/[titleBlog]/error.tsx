
'use client'

import Button from "@/atoms/Button"

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorBlog({ error, reset }: Props) {
    return (
        <section className="absolute top-2/4 right-2/4">
            <div className="grid gap-4">
                <h2>Something went wrong!</h2>
                <Button method={() => reset()} >
                    Try again
                </Button>
            </div>
        </section>
    )
}
