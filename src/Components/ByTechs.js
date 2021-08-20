import React from 'react';

import QxForm from "./QxSearch/QxForm/QxForm.js";
import ErrorBoundary from "../ErrorBoundary.js";

const ByTechs = props => {

    return (
        <>
            <h1>Qxpress Job Reports By Techs</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
};

export default ByTechs;