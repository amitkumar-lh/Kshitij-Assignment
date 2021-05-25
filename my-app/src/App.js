import "./App.css";
import { SignIn } from "./components/Login";
import { Logs } from "./components/Logs";
import { Occurence } from "./components/Occurence";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import history from "./components/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Router history={history}>
            <Route path="/" exact component={SignIn} />
            <Route path="/logs" exact component={Logs} />
            <Route path="/occurrences" exact component={Occurence} />
          </Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
