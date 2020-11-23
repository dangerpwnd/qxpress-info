import React from "react";
import "./App.css";
import QxForm from "./Components/QxSearch/QxForm/QxForm";
import ErrorBoundary from "./ErrorBoundary.js";

const App = props => {

  return (
    <div>
      <h1>Qxpress Job Reports</h1>
      <ErrorBoundary>
        <QxForm />
      </ErrorBoundary>
    </div>
  );
};

export default App;
