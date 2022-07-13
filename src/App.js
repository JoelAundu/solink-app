import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/index.css";
import Home from "./pages";
import pastLaunches from "./pages/past-launches";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/past-launches" component={pastLaunches}></Route>
      </Switch>
    </Router>
  );
}

export default App;
