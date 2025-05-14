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
        if (resp.data.length !== 0) {
          const processedData = handleSplitBuilder(handleSplitCol(resp.data));

          setJobData(processedData);
        } else {
          console.log('No data available');
        }
        setLoading(false);
      })
      .catch(() => {
        alert('Enter a Job Address');
        setLoading(false);
      });
  }, []);

  // Handlers

  // Logic to split job_Address into Address, Community columns

  const handleSplitCol = (resp) => {
    resp.forEach((col) => {
      if (col.jobAddress == null) {
        col.Address = 'INCORRECT ADDRESS ENTRY ON DATE';
        return;
      }
      let addrProps = col.jobAddress.split(/[-]+/);
      col.Address = addrProps[0];
      col.Community = addrProps[1];
    });
    return resp;
  };

  // Logic to split job_Builder into Builder

  const handleSplitBuilder = (resp) => {
    resp.forEach((col) => {
      if (col.jobBuilder == null) {
        col.Address = 'INCORRECT ADDRESS ENTRY ON DATE';
        return;
      }
      let bldrProps = col.jobBuilder.split(/[:]+/);
      col.Builder = bldrProps[0];
    });
    return resp;
  };

  return (
    <main className="w-full m-auto xl:w-11/12">
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
