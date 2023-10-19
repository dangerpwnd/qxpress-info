import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

import QxTable from '../QxTable/QxTable';

const today = new Date().toISOString().split('T')[0];

const QxFormJobType = () => {
  // States

  const [qxForm, setQxForm] = useState({
    startDate: today,
    endDate: today,
    jobtype: '',
  });

  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    if (jobData.length > 0) {
      setLoading(false);
    }
  }, [jobData]);

  useEffect(() => {
    axios
      .get('/api/jobtypes')
      .then((resp) => {
        setJobTypes(resp.data);
      })
      .catch(() => {
        alert('Job Type API Not Available');
      });
  }, []);

  // Handlers

  const inputChangeHandler = (e) => {
    setQxForm({ ...qxForm, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    let formData = { ...qxForm };
    setLoading(true);
    axios
      .get(
        '/api/jobtypes/' +
          formData.jobtype +
          '/?start=' +
          formData.startDate +
          '&end=' +
          formData.endDate
      )
      .then((resp) => {
        resp.data.length !== 0 ? handleSplitCol(resp.data) : setLoading(false);
        resp.data.length !== 0
          ? handleDateFormat(resp.data)
          : setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
    setQxForm({
      startDate: today,
      endDate: today,
      jobtype: '',
    });
  };

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

  // List of option elements for form

  const jobTypeList = jobTypes.map((opt) => {
    if (opt.JobType != 'Builder Extras/Options') {
      return (
        <option
          key={opt.JobType}
          value={opt.JobType}
          aria-labelledby="jobtypelabel"
        >
          {opt.JobType}
        </option>
      );
    }
    return (
      <option key={opt.JobType} value="Extras" aria-labelledby="jobtypelabel">
        {opt.JobType}
      </option>
    );
  });

  return (
    <div className="w-full m-auto xl:w-11/12">
      <form
        className="w-3/4 xl:w-1/3 my-8 mx-auto grid gap-2 grid-cols-2 place-items-center border-2 bg-off-white border-white rounded-lg py-2 text-black font-bold "
        onSubmit={submitFormHandler}
      >
        <label id="startlabel">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={qxForm.startDate}
          onChange={inputChangeHandler}
          aria-labelledby="startlabel"
          aria-required
          required
        />
        <label id="endlabel">End Date</label>
        <input
          type="date"
          name="endDate"
          value={qxForm.endDate}
          onChange={inputChangeHandler}
          aria-labelledby="endlabel"
          aria-required="true"
          required
        />
        <label id="stagelabel">Job Type</label>
        <select
          name="jobtype"
          onChange={inputChangeHandler}
          value={qxForm.jobtype}
          aria-labelledby="jobtypelabel"
          aria-required="true"
          required
        >
          <option defaultValue value="">
            Select Stage
          </option>
          {jobTypeList}
        </select>
        <button
          type="submit"
          className="text-x1 text-white font-bold border-2 m-2 p-2 border-white rounded-lg bg-mute-purp hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp"
        >
          Pull Data
        </button>
        <CSVLink
          data={jobData}
          filename={`${today}-QxInfo`}
          style={{
            cursor: 'pointer',
            font: 'inherit',
          }}
          className="text-x1 text-white font-bold border-2 m-2 p-2 border-white rounded-lg bg-mute-purp hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp"
        >
          Download Results
        </CSVLink>
      </form>
      {isLoading ? (
        <img className="CPTFade" src="/logo.png" alt="Cathedral Logo" />
      ) : (
        <>
          <QxTable formData={jobData} />
        </>
      )}
    </div>
  );
};

export default QxFormJobType;
