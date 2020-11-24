import React, { useState } from "react";
import { CSVLink } from "react-csv";

import axios from "../../../axios-stage";
import QxList from "../QxList/QxList";
import './QxForm.css';


const QxForm = (props) => {
  // States

  const [qxForm, setQxForm] = useState({
    address: "",
    startDate: "2010-01-01",
    endDate: "2010-12-01",
    stage: "Select",
  });

  const [jobData, setJobData] = useState([]);


  // Handlers
  const inputChangeHandler = (e) => {
    setQxForm({ ...qxForm, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    let formData = { ...qxForm };

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
  };

  return (
    <>
      <form className="GridForm" onSubmit={submitFormHandler}>
        <label>Street Address</label>
        <input
          type="text"
          name="address"
          value={qxForm.address}
          onChange={inputChangeHandler}
        ></input>
        <label>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={qxForm.startDate}
          onChange={inputChangeHandler}
        ></input>
        <label>End Date</label>
        <input
          type="date"
          name="endDate"
          value={qxForm.endDate}
          onChange={inputChangeHandler}
        ></input>
        <label>Stage</label>
        <select name="stage" onChange={inputChangeHandler} value={qxForm.stage}>
          <option value="Select">Select Stage</option>
          <option value="Rough">Rough</option>
          <option value="Topout">Topout</option>
          <option value="Trim">Trim</option>
        </select>
        <button type="submit">Pull Data</button>
        <CSVLink
          data={jobData}
          style={{
            color: "white",
            outline: "none",
            cursor: "pointer",
            font: "inherit",
            fontWeight: "bold",
          }}
        >
          Download Results
        </CSVLink>
      </form>
      <QxList formData={jobData} />
    </>
  );
};

export default QxForm;
