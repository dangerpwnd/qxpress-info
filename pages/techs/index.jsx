import React from 'react';

import QxForm from '../../src/Components/QxSearch/QxForm/QxForm';
import ErrorBoundary from '../../src/ErrorBoundary';

const ByTechs = () => {
    return (
        <>
            <h1>Qxpress Job Reports By Techs</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
}

export default ByTechs;