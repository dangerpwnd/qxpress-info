import React, { Component } from "react";
import "./App.css";
import Stages from "./Containers/Stages/Stages";


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Qxpress Job Reports</h1>
        <Stages />
      </div>
    );
  }
}

export default App;
