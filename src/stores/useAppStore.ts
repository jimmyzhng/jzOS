import { create } from "zustand";

export type AppId = 'explorer' | 'textedit' | 'browser' | 'chat' | 'settings'



export const useAppStore = create((set) => ({
    apps: [],
    focusedAppId: null,

    openApp: (newApp) => set((state) => ({
        apps: [...state.apps, newApp],
        focusedAppId: newApp.id
    })),

    closeApp: (appId) => set((state) => {
        const remainingApps = state.apps.filter((app) => app.id !== appId)

        // Closing last focused app puts focus on last opened app
        return {
            apps: remainingApps,
            focusedAppId: state.focusedAppId === appId
                ? (remainingApps.length > 0 ? remainingApps[remainingApps.length - 1].id : null)
                : state.focusedAppId
        }
    }),

    focusApp: (appId) => set(() => ({
        focusedAppId: appId
    }))
}))