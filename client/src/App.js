import { HomePage, GamePage } from "./pages";
import { Navbar, GameFrame, Footer } from "./components";
import { Route, Switch } from "react-router-dom";
function App() {
  const gameSrc = "";
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/math" component={GameFrame} exact />
        <Route path="/writing" component={GamePage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
