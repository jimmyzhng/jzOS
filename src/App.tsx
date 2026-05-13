import Desktop from "./components/Desktop"
import TaskBar from "./components/TaskBar/TaskBar"
import Window from "./components/Window"
import { useAppStore } from "./stores/useAppStore"


function App() {
  const apps = useAppStore(state => state.apps)
  const focusedAppId = useAppStore(state => state.focusedAppId)
  const focusApp = useAppStore(state => state.focusApp)

  return (
    <div>
      <Desktop />
      {apps.map((app) => (
        <Window
          key={app.id}
          id={app.id}
          title={app.title}
          icon={app.icon}
          focused={focusedAppId === app.id}
          onFocus={() => focusApp(app.id)}
        />
      ))}
      <TaskBar />
    </div>
  )
}

export default App
