import StartMenu from "./StartMenu"
import SystemTray from "./SystemTray"
import ActiveWindows from "./Windows/ActiveWindows"

const TaskBar = () => {

    return (
        <div className="fixed bottom-0 left-0 w-full h-[30px] bg-gradient-to-b from-[#245edb] via-[#3371e8] to-[#1c4fc7] border-t-2 border-[#0831d9] flex items-center z-[9999] select-none">
            <StartMenu />
            <ActiveWindows />
            <SystemTray />

        </div>
    )
}

export default TaskBar