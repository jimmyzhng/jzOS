import { Rnd } from "react-rnd"
import { useAppStore } from "../stores/useAppStore"

type WindowProps = {
    id: string
    title: string
    focused?: boolean
    onFocus?: () => void
}

const Window = ({ id, title, focused, onFocus }: WindowProps) => {
    const closeApp = useAppStore(state => state.closeApp)

    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 512,
                height: 384,
            }}
            minWidth={300}
            minHeight={200}
            dragHandleClassName="title-bar"
            style={{ zIndex: focused ? 10 : 1 }}
            onMouseDownCapture={onFocus}
        >
            {/* Main Window */}
            <div className={`flex flex-col w-full h-full rounded-t-lg overflow-hidden border-l-[3px] border-r-[3px] border-b-[3px] shadow-xl font-sans ${focused ? 'border-[#003edb]' : 'border-[#5c85d6]'}`}>

                {/* Title Bar */}
                <div className={`title-bar flex h-8 flex justify-between items-center px-1 ${focused ? 'active-title-bar' : 'inactive-title-bar'}`}>
                    {/* Title Text */}
                    <div className="text-white font-bold text-[13px] tracking-wide [text-shadow:1px_1px_2px_black] pl-1 select-none"> {title} </div>
                    {/* Close, minimize menu */}
                    <div className="flex gap-[2px] text-white font-bold">
                        <div className="xp-window-btn">_</div>
                        <div className="xp-window-btn">□</div>
                        <div onClick={() => closeApp(id)} className="xp-window-btn-close">X</div>
                    </div>

                </div>
                {/* Controls (File, Edit, View, etc.) */}
                <div className="flex items-center h-[22px] gap-2 px-2 text-black text-xs border-b border-gray-300 bg-[#ece9d8] select-none">
                    <div className="controls-selector">File</div>
                    <div className="controls-selector">Edit</div>
                    <div className="controls-selector">View</div>
                </div>

                {/* Content */}
                <div className="Content bg-white flex-1 w-full h-full p-4 text-black text-sm">

                </div>
            </div >
        </Rnd>
    )
}

export default Window