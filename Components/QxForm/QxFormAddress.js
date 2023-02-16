import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

import QxTable from '../QxTable/QxTable';

const QxFormAddress = () => {
  // States
  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (jobData.length > 0) {
      setLoading(false);
    }
  }, [jobData]);

  // Handlers
  const inputChangeHandler = (e) => {
    setQxForm({ ...qxForm });
  };
};
