import React from 'react';

import LinkNav from '../../Components/LinkNav';
import QxFormTech from '../../Components/QxForm/QxFormTech';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByTechs = () => {
  return (
    <div className="bg-deep-purple-300">
      <ErrorBoundary>
        <LinkNav heading="Qxpress Job Reports By Techs" />
        <QxFormTech />
      </ErrorBoundary>
    </div>
  );
};

export default ByTechs;
