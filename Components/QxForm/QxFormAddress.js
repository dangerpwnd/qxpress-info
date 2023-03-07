import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

import QxTable from '../QxTable/QxTable';

const QxFormAddress = ({ address }) => {
  // States

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/address/' + address)
      .then((resp) => {
        resp.data.length !== 0
          ? handleSplitCol(resp.data)
          : console.log('No data available');
        resp.data.length !== 0
          ? handleDateFormat(resp.data)
          : console.log('No data available');
      })
      .catch(() => {
        alert('Address API Not Available');
      });
  }, []);

  // Handlers

  // Logic to split job_Address into Address, Community columns

  const handleSplitCol = (resp) => {
    resp.forEach((col) => {
      let addrProps = col.address.split(/[-]+/);
      col.Address = addrProps[0];
      col.Community = addrProps[1];
    });
    setJobData(resp);
  };

  // Logic to change format of date

  const handleDateFormat = (resp) => {
    resp.forEach((col) => {
      const newDate = new Date(col.jobDate).toISOString().split('T')[0];
      col.jobDate = newDate;
    });
    setJobData(resp);
  };

  return (
    <>
      <QxTable formData={jobData} />
    </>
  );
};

export default QxFormAddress;
