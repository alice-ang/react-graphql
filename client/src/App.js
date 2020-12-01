import HomePage from "./pages/homePage";
import { Navbar, GameFrame } from "./components";
function App() {
  const gameSrc = "";
  return (
    <div className="App">
      {gameSrc ? <GameFrame source={gameSrc} /> : <Navbar />}

      <HomePage />
    </div>
  );
}

export default App;
