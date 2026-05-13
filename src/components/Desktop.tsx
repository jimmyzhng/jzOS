import { useAppStore } from "../stores/useAppStore"
import { DESKTOP_SHORTCUTS } from "../config/apps"

const Desktop = () => {

    const openApp = useAppStore(state => state.openApp)

    return (
        <div className="flex flex-col flex-wrap gap-1 p-2 h-[calc(100vh-30px)] content-start h-screen w-screen bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/xp/wallpaper.jpeg')" }}>
            {DESKTOP_SHORTCUTS.map((shortcut) => (
                <div
                    key={shortcut.id}
                    onDoubleClick={() => openApp({
                        id: `${shortcut.id}-${Date.now()}`,
                        title: shortcut.title,
                        icon: shortcut.icon
                    })}
                    className="flex flex-col items-center justify-center gap-1 hover:bg-blue-500/30 rounded p-1 cursor-pointer"
                >
                    <img src={shortcut.icon} alt={shortcut.title} className="w-8 h-8" />
                    <span className="text-white text-[11px] text-center drop-shadow-md select-none [text-shadow:1px_1px_2px_black]">
                        {shortcut.title}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Desktop

