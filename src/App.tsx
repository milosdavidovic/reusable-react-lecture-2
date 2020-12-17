import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import CompoundComponents from "./components/CompoundComponents";
import ReusableLogic from "./components/Hooks/ReusableLogic";
import UseEffectPitfalls from "./components/Hooks/UseEffectPitfalls";

const App = () => {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <nav>
          <ul>
            <li>
              <Link to="/use-effect">useEffect pitfalls</Link>
            </li>
            <li>
              <Link to="/reuse-logic">Reuse logic with custom hooks</Link>
            </li>
            <li>
              <Link to="/compound">Compound components</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/use-effect">
            <UseEffectPitfalls />
          </Route>
          <Route path="/reuse-logic">
            <ReusableLogic />
          </Route>
          <Route path="/compound">
            <CompoundComponents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
