enum TypesButton {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

type Props = {
    text: string
    type?: TypesButton
}

export default function Button({ text, type = TypesButton.submit }: Props) {
    return (
        <button
            className="rounded-2xl w-32 p-3 outline bg-emerald-400 text-black hover:bg-emerald-600 hover:text-slate-100 hover:outline-slate-100"
            type={type}
        >
            {text}
        </button>
    )
}
