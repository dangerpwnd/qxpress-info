import React from "react";
import "./App.css";
import QxForm from "./Components/QxSearch/QxForm/QxForm";
import {ErrorBoundary} from 'react-error-boundary';

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <div>
      <p>Scream at Eric. He broke it.</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

const App = props => {
  return (
    <>
      <h1>Qxpress Job Reports</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}  
      >
        <QxForm />
      </ErrorBoundary>
    </>
  );
};

export default App;
