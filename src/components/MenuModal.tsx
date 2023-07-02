import MarkIcon from "@/icons/MarkIcon"

type propsMenuModal = {
    handledToggle: () => void
}

export const MenuModal = ({ handledToggle }: propsMenuModal) => {
    return (
        <div className="rounded-md p-6 absolute inset-x-3 top-7 z-10 transition duration-150 ease-in-out bg-slate-700 shadow-lg shadow-slate-500/50 text-white">
            <div className="flex justify-between">
                <div>Navigation</div>
                <div>
                    <button onClick={handledToggle}>
                        <MarkIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}
