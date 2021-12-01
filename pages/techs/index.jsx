import React from 'react';
import Head from 'next/head';
import LinkNav from '../../Components/LinkNav';
import QxFormTech from '../../Components/QxForm/QxFormTech';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByTechs = () => {
  return (
    <>
      <Head>
        <title>Qxpress Info - By Techs</title>
        <link rel="icon" href="/CP.ico" />
      </Head>
      <main>
        <ErrorBoundary>
          <LinkNav className="h-1/3" heading="Qxpress Job Reports By Techs" />
          <QxFormTech />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default ByTechs;
