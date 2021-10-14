import React from 'react';

import QxFormTech from '../Components/QxForm/QxFormTech';
import ErrorBoundary from '../Components/ErrorBoundary';

const ByTechs = () => {
    return (
        <>
            <h1>Qxpress Job Reports By Techs</h1>
            <ErrorBoundary>
                <QxFormTech />
            </ErrorBoundary>
        </>
    )
}

export default ByTechs;