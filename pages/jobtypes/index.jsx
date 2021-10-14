import React from 'react';

import LinkNav from '../../Components/LinkNav';
import QxFormJobType from '../../Components/QxForm/QxFormJobType';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByJobTypes = () => {
    return (
        <>
            <ErrorBoundary>
            <LinkNav />
                <h1>Qxpress Job Reports By Job Types</h1>
                <QxFormJobType />
            </ErrorBoundary>
        </>
    )
}

export default ByJobTypes;