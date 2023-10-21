enum TypesButton {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

type Props = {    
    children?: React.ReactNode
    type?: TypesButton
    method?: () => void
}

export default function Button({ children, type = TypesButton.submit, method }: Props) {
    return (
        <button
            className="
                rounded-2xl w-32 p-3 outline 
                bg-emerald-400 text-black 
                hover:bg-emerald-600 hover:text-slate-100 hover:outline-slate-100 hover:outline-2
            "
            type={type}
            onClick={method}
        >
            {children}
        </button>
    )
}
