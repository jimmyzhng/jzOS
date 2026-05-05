import { Rnd } from "react-rnd"

const Window = () => {
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
        >
            {/* Main Window */}
            <div className="flex flex-col w-full h-full rounded-t-lg overflow-hidden border-l-[3px] border-r-[3px] border-b-[3px] border-[#003edb] shadow-xl font-sans">

                {/* Title Bar */}
                <div className="title-bar flex h-8 bg-gradient-to-b from-[#0058e6] via-[#3a93ff] to-[#003edb] flex justify-between items-center px-1">
                    {/* Title Text */}
                    <div className="text-white font-bold text-[13px] tracking-wide [text-shadow:1px_1px_2px_black] pl-1 select-none"> My Documents </div>
                    {/* Close, minimize menu */}
                    <div className="flex gap-[2px] text-white font-bold">
                        <div className="w-[22px] h-[22px] border border-white/80 rounded-[3px] bg-gradient-to-b from-[#78b1f2] via-[#2f88eb] to-[#1264c7] flex justify-center items-center [text-shadow:1px_1px_1px_black] hover:brightness-110 cursor-default">_</div>
                        <div className="w-[22px] h-[22px] border border-white/80 rounded-[3px] bg-gradient-to-b from-[#78b1f2] via-[#2f88eb] to-[#1264c7] flex justify-center items-center [text-shadow:1px_1px_1px_black] hover:brightness-110 cursor-default">□</div>
                        <div className="w-[22px] h-[22px] border border-white/80 rounded-[3px] bg-gradient-to-b from-[#e48b7f] via-[#da6854] to-[#cc4630] flex justify-center items-center [text-shadow:1px_1px_1px_black] hover:brightness-110 cursor-default">X</div>
                    </div>

                </div>
                {/* Controls (File, Edit, View, etc.) */}
                <div className="flex items-center h-[22px] gap-2 px-2 text-black text-xs border-b border-gray-300 bg-[#ece9d8] select-none">
                    <div className="hover:bg-[#316ac5] hover:text-white px-1 cursor-default">File</div>
                    <div className="hover:bg-[#316ac5] hover:text-white px-1 cursor-default">Edit</div>
                    <div className="hover:bg-[#316ac5] hover:text-white px-1 cursor-default">View</div>
                </div>

                {/* Content */}
                <div className="Content bg-white flex-1 w-full h-full p-4 text-black text-sm">

                </div>
            </div >
        </Rnd>
    )
}

export default Window