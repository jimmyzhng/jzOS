import Window from "./components/Window"


function App() {

  return (
    <div
      className="h-screen w-screen bg-cover bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/xp4k.jpeg')" }}
    >
      <Window />
    </div>
  )
}

export default App
