import { create } from "zustand";

export type AppId = 'explorer' | 'textedit' | 'browser' | 'chat' | 'settings'

interface AppState {
    apps: any[];
    focusedAppId: string | null;
    openApp: (newApp: any) => void;
    closeApp: (appId: string) => void;
    focusApp: (appId: string) => void;
    minimizeApp: (appId: string) => void;
    maximizeApp: (appId: string) => void;
    restoreApp: (appId: string) => void;

}

const updateApp = (apps: any[], appId: string, changes: object) => apps.map(app => app.id === appId ? { ...app, ...changes } : app)

export const useAppStore = create<AppState>((set) => ({
    apps: [],
    focusedAppId: null,

    openApp: (newApp) => set((state) => ({
        apps: [...state.apps, newApp],
        focusedAppId: newApp.id,
        minimized: false,
        maximized: false
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
    })),

    minimizeApp: (appId) => set((state) => {


    }),
    maximizeApp: (appId) => set((state) => ({
        apps: updateApp(state.apps, appId, { maximized: true })
    })),
    restoreApp: (appId) => set((state) => ({
        apps: updateApp(state.apps, appId, { minimized: false, maximized: false })
    })),

}))