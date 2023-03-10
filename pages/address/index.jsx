import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import LinkNav from '../../Components/LinkNav';
import QxFormAddress from '../../Components/QxForm/QxFormAddress';
import ErrorBoundary from '../../Components/ErrorBoundary';

const ByAddress = () => {
  const router = useRouter();
  const { addr } = router.query;

  const [componentKey, setComponentKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = () => {
      setComponentKey(componentKey + 1);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [componentKey, router]);

  return (
    <>
      <Head>
        <title>Qxpress Info - By Address</title>
        <link rel="icon" href="/CP.ico" />
      </Head>
      <main>
        <ErrorBoundary>
          <LinkNav className="h-1/3" heading="Qxpress Job Reports By Address" />
          <QxFormAddress address={addr} key={componentKey} />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default ByAddress;
