import React, { useState, useEffect } from 'react';
import axios from 'axios';

import QxTable from '../QxTable/QxTable';

const QxFormAddress = ({ address }) => {
  // States

  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (jobData.length > 0) {
      setLoading(false);
    }
  }, [jobData]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/address/' + address)
      .then((resp) => {
        resp.data.length !== 0
          ? handleSplitCol(resp.data)
          : console.log('No data available');
        setJobData(resp.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Address API Not Available');
      });
  }, []);

  // Handlers

  // Logic to split job_Address into Address, Community columns

  const handleSplitCol = (resp) => {
    resp.forEach((col) => {
      let addrProps = col.jobAddress.split(/[-]+/);
      col.Address = addrProps[0];
      col.Community = addrProps[1];
    });
  };

  return (
    <main className="w-3/4 mx-auto">
      {isLoading ? (
        <img className="CPTFade" src="/logo.png" alt="Cathedral Logo" />
      ) : (
        <>
          <QxTable formData={jobData} />
        </>
      )}
    </main>
  );
};

export default QxFormAddress;
