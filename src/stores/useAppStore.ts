import { create } from "zustand";

export type AppId = 'explorer' | 'textedit' | 'browser' | 'chat' | 'settings'



export const useAppStore = create((set) => ({
    apps: [],

    openApp: (newApp) => set((state) => ({
        apps: [...state.apps, newApp]
    })),

    closeApp: (appId) => set((state) => {
        const remainingApps = state.apps.filter((app) => app.id !== appId)

        return {
            apps: remainingApps
        }

    })
}))