import React from 'react'
import { useAppStore } from '../../../stores/useAppStore'
import ActiveWindow from './ActiveWindow'

const ActiveWindows = () => {
    const apps = useAppStore(state => state.apps)
    const focusedAppId = useAppStore(state => state.focusedAppId)
    const focusApp = useAppStore(state => state.focusApp)

    return (
        <div className="flex-1 h-full flex items-center px-2 overflow-hidden gap-1">
            {apps.map(app => (
                <ActiveWindow
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    icon={app.icon}
                    focused={focusedAppId === app.id}
                    onClick={() => focusApp(app.id)}
                />
            ))}
        </div>
    )
}

export default ActiveWindows