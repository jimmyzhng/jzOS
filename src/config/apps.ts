export type AppConfig = {
    id: string;
    title: string;
    icon: string;
}

export const APPS: Record<string, AppConfig> = {
    myComputer: {
        id: 'myComputer',
        title: 'My Computer',
        icon: '/xp/pc.png',
    },
    notepad: {
        id: 'internet',
        title: 'Internet Explorer',
        icon: '/xp/ie.png',
    },
    recycleBin: {
        id: 'recycleBin',
        title: 'Recycle Bin',
        icon: '/xp/trash-empty 2.png',
    }
}

// array for icons showing on desktop
export const DESKTOP_SHORTCUTS = [
    APPS.myComputer,
    APPS.notepad,
    APPS.recycleBin
]
