import React from 'react';

import QxForm from '../../src/Components/QxSearch/QxForm/QxForm';
import ErrorBoundary from '../../src/ErrorBoundary';

const ByStages = () => {
    return (
        <>
            <h1>Qxpress Job Reports By Stages</h1>
            <ErrorBoundary>
                <QxForm />
            </ErrorBoundary>
        </>
    )
}

export default ByStages;