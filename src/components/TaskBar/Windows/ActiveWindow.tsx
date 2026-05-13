import React from 'react'

type ActiveWindowProps = {
    id: string;
    title: string;
    icon: string;
    focused?: boolean;
    onClick?: () => void;
}

const ActiveWindow = ({ id, title, icon, focused, onClick }: ActiveWindowProps) => {
    const baseClasses = "flex-1 max-w-[160px] h-[26px] flex items-center gap-1.5 px-2 rounded-[2px] cursor-default select-none overflow-hidden"

    return (
        <div
            className={focused ? "xp-taskbar-btn-focused" : "xp-taskbar-btn"}
            onClick={onClick}
        >
            <img src={icon} className="w-4 h-4 pointer-events-none shrink-0" alt="" />
            <span className="text-white text-[11px] truncate drop-shadow-md">
                {title}
            </span>
        </div>
    )
}

export default ActiveWindow