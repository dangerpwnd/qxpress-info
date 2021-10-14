import React from 'react';

import QxFormJobType from '../Components/QxForm/QxFormJobType';
import ErrorBoundary from '../Components/ErrorBoundary';

const ByJobTypes = () => {
    return (
        <>
            <h1>Qxpress Job Reports By Job Types</h1>
            <ErrorBoundary>
                <QxFormJobType />
            </ErrorBoundary>
        </>
    )
}

export default ByJobTypes;