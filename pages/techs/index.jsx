import React from 'react';

import LinkNav from '../../Components/LinkNav';
import QxFormTech from '../../Components/QxForm/QxFormTech';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByTechs = () => {
  return (
    <div>
      <ErrorBoundary>
        <LinkNav className="h-1/3" heading="Qxpress Job Reports By Techs" />
        <QxFormTech />
      </ErrorBoundary>
    </div>
  );
};

export default ByTechs;
