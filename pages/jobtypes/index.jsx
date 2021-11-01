import React from 'react';

import LinkNav from '../../Components/LinkNav';
import QxFormJobType from '../../Components/QxForm/QxFormJobType';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByJobTypes = () => {
  return (
    <div>
      <ErrorBoundary>
        <LinkNav className="h-1/3" heading="Qxpress Job Reports By Job Types" />
        <QxFormJobType />
      </ErrorBoundary>
    </div>
  );
};

export default ByJobTypes;
