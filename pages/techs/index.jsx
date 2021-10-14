import React from 'react';

import LinkNav from '../../Components/LinkNav';
import QxFormTech from '../../Components/QxForm/QxFormTech';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByTechs = () => {
    return (
        <>
            <ErrorBoundary>
            <h1>Qxpress Job Reports By Techs</h1>
                <LinkNav />
                <QxFormTech />
            </ErrorBoundary>
        </>
    )
}

export default ByTechs;