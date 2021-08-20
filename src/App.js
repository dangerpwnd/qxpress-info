import React from "react";
import { Link, Router } from "@reach/router";

import "./App.css";
import ByStages from "./Components/ByStages.js";
import ByTechs from "./Components/ByTechs.js";

const App = props => {

  return (
    <div role="main">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stages">By Stages</Link>
        <Link to="/techs">By Techs</Link>
      </nav>
      <Router>
        <ByStages path="/stages" />
        <ByTechs path="/techs" />
      </Router>
    </div>
  );
};

export default App;
