import React from 'react';
import Head from 'next/head';
import LinkNav from '../../Components/LinkNav';
import QxFormJobType from '../../Components/QxForm/QxFormJobType';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByJobTypes = () => {
  return (
    <>
      <Head>
        <title>Qxpress Info - By Job Types</title>
        <link rel="icon" href="cp.ico" />
      </Head>
      <main>
        <ErrorBoundary>
          <LinkNav
            className="h-1/3"
            heading="Qxpress Job Reports By Job Types"
          />
          <QxFormJobType />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default ByJobTypes;
