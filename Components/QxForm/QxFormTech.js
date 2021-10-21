import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

import QxTable from '../QxTable/QxTable';
import './QxForm.module.css';
import image from '../../public/logo.png';

const today = new Date().toISOString().split('T')[0];
const QxFormTech = () => {
  // States

  const [qxForm, setQxForm] = useState({
    startDate: today,
    endDate: today,
    tech: '',
  });

  const [techData, setTechData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (jobData.length > 0) {
      setLoading(false);
    }
  }, [jobData]);

  useEffect(() => {
    axios
      .get('/api/techs')
      .then((resp) => {
        setTechData(resp.data);
      })
      .catch((err) => {
        alert('Tech API Not Available');
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
        '/api/techs/' +
          formData.tech +
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
      tech: '',
    });
  };

  // Logic to split job_Address into Address, Community columns

  const handleSplitCol = (resp) => {
    resp.forEach((col) => {
      if (col.jobAddress !== null) {
        let addrProps = col.jobAddress.split(/[-]+/);
        col.Address = addrProps[0];
        col.Community = addrProps[1];
      } else {
        return;
      }
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

  // List of techs as options for form

  const techList = techData.map((opt) => {
    return (
      <option
        key={opt.CrewName}
        value={opt.CrewName}
        aria-labelledby="techlabel"
      >
        {opt.CrewName}
      </option>
    );
  });

  return (
    <div className="bg-mute-brown">
      <form className="GridForm" onSubmit={submitFormHandler}>
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
        <label id="techlabel">Tech</label>
        <select
          name="tech"
          onChange={inputChangeHandler}
          value={qxForm.stage}
          aria-labelledby="techlabel"
          aria-required="true"
          required
        >
          <option defaultValue disabled value="">
            Select Tech
          </option>
          {techList}
        </select>
        <button type="submit">Pull Data</button>
      </form>
      {isLoading ? (
        <img className="CPTFade" src={image} alt="Cathedral Logo" />
      ) : (
        <>
          <QxTable formData={jobData} />
          <CSVLink
            data={jobData}
            style={{
              color: 'white',
              cursor: 'pointer',
              font: 'inherit',
              fontWeight: 'bold',
            }}
          >
            Download Results
          </CSVLink>
        </>
      )}
    </div>
  );
};

export default QxFormTech;
