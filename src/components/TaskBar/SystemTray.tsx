import { useState, useEffect } from 'react'

const SystemTray = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formattedTime = time.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    })

    return (
        <div className="h-full ml-auto px-3 flex items-center gap-2 bg-gradient-to-b from-[#0ba1e3] via-[#0996d8] to-[#0087ce] border-l border-l-[#1c4fc7] text-white text-[11px] [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-default">
            {formattedTime}
        </div>
    )
}

export default SystemTray