import Desktop from "./components/Desktop"
import TaskBar from "./components/TaskBar/TaskBar"
import Window from "./components/Window"
import { useAppStore } from "./stores/useAppStore"


function App() {
  const apps = useAppStore(state => state.apps)

  return (
    <div>
      <Desktop />
      {apps.map((app) => (
        <Window
          key={app.id}
          id={app.id}
          title={app.title}
        />
      ))}
      <TaskBar />
    </div>
  )
}

export default App
