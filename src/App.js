import React from "react";
import "./App.css";
import QxForm from "./Components/QxSearch/QxForm/QxForm";
import QxList from "./Components/QxSearch/QxList/QxList";


const App = props => {
  return (
    <>
      <h1>Qxpress Job Reports</h1>
      <QxForm />
      <QxList />
    </>
  );
};

export default App;
