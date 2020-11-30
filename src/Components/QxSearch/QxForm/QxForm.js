import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

import axios from "../../../axios-stage";
import QxList from "../QxList/QxList";
import './QxForm.css';
import image from '../../../Assets/logo.png';


const QxForm = (props) => {
  // States

  const [qxForm, setQxForm] = useState({
    address: "",
    startDate: "2010-01-01",
    endDate: "2010-12-01",
    stage: "Select",
  });

  const [jobData, setJobData] = useState([]);
  const [hasSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if(jobData.length > 0){
      setLoading(false)
    }
  }, [jobData])
  // Handlers
  const inputChangeHandler = (e) => {
    setQxForm({ ...qxForm, [e.target.name]: e.target.value });
    setSubmit(false);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    let formData = { ...qxForm };
    setLoading(true);
    if (formData.address === "") {
      axios
        .get(
          "/" +
            formData.startDate +
            "/" +
            formData.endDate +
            "/" +
            formData.stage
        )
        .then((resp) => {
          resp.data.length !== 0
            ? setJobData(resp.data)
            : alert("No data available");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      axios
        .get(
          "/" +
            formData.address +
            "/" +
            formData.startDate +
            "/" +
            formData.endDate +
            "/" +
            formData.stage
        )
        .then((resp) => {
          resp.data.length !== 0
            ? setJobData(resp.data)
            : alert("No data available");
        })
        .catch((err) => {
          alert(err);
        });
    }
    setQxForm({
      address: "",
      startDate: "",
      endDate: "",
      stage: "Select",
    })
    setSubmit(true);
  };

  return (
    <>
      <form className="GridForm" onSubmit={submitFormHandler} tabindex="0">
        <label id="address" tabindex="-1">Street Address</label>
        <input
          type="text"
          name="address"
          value={qxForm.address}
          onChange={inputChangeHandler}
          aria-required="false"
          tabindex="-1"
        ></input>
        <label id="start_date" tabindex="-1">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={qxForm.startDate}
          onChange={inputChangeHandler}
          aria-labelledby="start_date"
          aria-required="true"
          tabindex="-1"
        ></input>
        <label id="end_date" tabindex="-1">End Date</label>
        <input
          type="date"
          name="endDate"
          value={qxForm.endDate}
          onChange={inputChangeHandler}
          aria-labelledby="end_date"
          aria-required="true"
          tabindex="-1"
        ></input>
        <label id="stage" tabindex="-1">Stage</label>
        <select name="stage" onChange={inputChangeHandler} value={qxForm.stage} aria-required="true" tabindex="-1">
          <option value="Select" aria-labelledby="stage" tabindex="-1">Select Stage</option>
          <option value="Rough" aria-labelledby="stage" tabindex="-1">Rough</option>
          <option value="Topout" aria-labelledby="stage" tabindex="-1">Topout</option>
          <option value="Trim" aria-labelledby="stage" tabindex="-1">Trim</option>
        </select>
        <button type="submit" tabindex="-1">Pull Data</button>
        <CSVLink
          data={jobData}
          style={{
            color: "white",
            outline: "none",
            cursor: "pointer",
            font: "inherit",
            fontWeight: "bold",
          }}
          tabindex="-1"
        >
          Download Results
        </CSVLink>
      </form>
      {isLoading ? <img className="CPTFade" src={image} alt="Cathedral Logo" /> : <QxList formData={jobData} hasSubmit={hasSubmit} />}
    </>
  );
};

export default QxForm;
