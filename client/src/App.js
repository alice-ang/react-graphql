import { HomePage, GamePage } from "./pages";
import { Navbar, GameFrame, Footer } from "./components";
import { Route, Switch } from "react-router-dom";
import { Memory } from "./pages/games/memory/memory";

function App() {
  const gameSrc = "";

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/math" component={GameFrame} exact />
        <Route path="/writing" component={GamePage} exact />
        <Route path="/game" component={Memory} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
