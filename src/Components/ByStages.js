import React from 'react';

import QxForm from "./QxSearch/QxForm";
import ErrorBoundary from "../ErrorBoundary";

const ByStages = props => {

    return (
        <>
            <h1>Qxpress Job Reports</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
};

export default ByStages;