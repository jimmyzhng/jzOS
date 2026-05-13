import React from 'react'
import { useAppStore } from '../../../stores/useAppStore'
import ActiveWindow from './ActiveWindow'

const ActiveWindows = () => {
    const apps = useAppStore(state => state.apps)

    return (
        <div className="flex-1 h-full flex items-center px-2 overflow-hidden">
            {apps.map(app => (
                <ActiveWindow
                    key={app.id}
                    id={app.id}
                    title={app.title}
                    icon={app.icon}
                />
            ))}
        </div>
    )
}

export default ActiveWindows