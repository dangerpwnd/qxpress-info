// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { Link, Router } from "@reach/router";
import  { css, jsx } from "@emotion/react";

import './App.css';
import ByStages from "./Components/ByStages.js";
import ByTechs from "./Components/ByTechs.js";

const App = props => {

  const NavLink = props => {
    return(
      <Link
        {...props}
        css={
          css`
            border-style: none solid solid solid;
            padding: 1rem;
            color: white;
            background-color: blue;
            &:active {
              background-color: darkblue;
            }
          `} 
      />
    ) 
  }

  return (
    <div role="main">
      <nav css={
        css`
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
        `
      }>
        <NavLink to="/stages">By Stages</NavLink>
        <NavLink to="/techs">By Techs</NavLink>
      </nav>
      <Router>
        <ByStages path="/stages" />
        <ByTechs path="/techs" />
      </Router>
      <div>
        <h1>Qxpress Info</h1>
      </div>
    </div>
  );
};

export default App;
