enum TypesButton {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

type Props = {    
    children?: React.ReactNode
    type?: TypesButton
    method?: () => void
    className?: string
}

export default function Button({ children, type = TypesButton.submit, method, className }: Props) {
    return (
        <button
            className={
                `rounded-2xl w-32 p-3 outline flex justify-center text-center
                bg-emerald-400 text-black
                hover:bg-emerald-300 hover:text-slate-700 hover:outline-slate-700 hover:outline-2
                ${className}`
            }
            type={type}
            onClick={method}
        >
            {children}
        </button>
    )
}
