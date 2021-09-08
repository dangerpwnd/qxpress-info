import React from 'react';

import QxForm from "./QxSearch/QxForm/QxForm.js";
import ErrorBoundary from "../ErrorBoundary.js";

const ByStages = () => {

    return (
        <>
            <h1>Qxpress Job Reports By Stages</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
};

export default ByStages;