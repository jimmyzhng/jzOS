import React from 'react'

type ActiveWindowProps = {
    id: string;
    title: string;
    icon: string;
}

const ActiveWindow = ({ id, title, icon }: ActiveWindowProps) => {
    return (
        <div className="flex-1 max-w-[160px] h-[26px] flex items-center gap-1.5 px-2 rounded-[2px] 
            bg-gradient-to-b from-[#3b7eed] via-[#2f67db] to-[#1642b5] 
            border-t border-l border-[#5c94f5] border-r border-b border-[#102e82] 
            hover:brightness-110 active:brightness-90 active:border-t-[#102e82] active:border-l-[#102e82] active:border-r-[#5c94f5] active:border-b-[#5c94f5] 
            cursor-default select-none overflow-hidden">
            <img src={icon} className="w-4 h-4 pointer-events-none shrink-0" alt="" />
            <span className="text-white text-[11px] truncate drop-shadow-md">
                {title}
            </span>
        </div>
    )
}

export default ActiveWindow