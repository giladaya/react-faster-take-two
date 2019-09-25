import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Home from "./Home";
import Topics from "./Topics";
import Settings from "./Settings";
import Rare from "./Rare";

// const Home = lazy(() => import("./Home"));
// const Topics = lazy(() => import("./Topics"));
// const Settings = lazy(() => import("./Settings"));
// const Rare = lazy(() => import("./Rare"));


const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/rare">Rarely used route</Link>
      </li>
    </ul>

    <hr />

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/settings" component={Settings} />
        <Route path="/rare" component={Rare} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
