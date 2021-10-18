import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";

import QxTable from "../QxTable/QxTable";
import "./QxForm.module.css";
import image from "../../public/logo.png";

const today = new Date().toISOString().split("T")[0];

const QxFormJobType = () => {
  // States

  const [qxForm, setQxForm] = useState({
    startDate: today,
    endDate: today,
    jobtype: "",
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
      .get("/api/jobtypes")
      .then((resp) => {
        setJobTypes(resp.data);
      })
      .catch(() => {
        alert("Job Type API Not Available");
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
        "/api/jobtypes/" +
          formData.jobtype +
          "/?start=" +
          formData.startDate +
          "&end=" +
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
      jobtype: "",
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
      const newDate = new Date(col.jobDate).toISOString().split("T")[0];
      col.jobDate = newDate;
    });
    setJobData(resp);
  };

  // List of option elements for form

  const jobTypeList = jobTypes.map((opt) => {
    if (opt.JobType != "Builder Extras/Options") {
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
    <>
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
        <label id="stagelabel">Job Type</label>
        <select
          name="jobtype"
          onChange={inputChangeHandler}
          value={qxForm.jobtype}
          aria-labelledby="jobtypelabel"
          aria-required="true"
          required
        >
          <option selected disabled value="">
            Select Stage
          </option>
          {jobTypeList}
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
              color: "white",
              cursor: "pointer",
              font: "inherit",
              fontWeight: "bold",
            }}
          >
            Download Results
          </CSVLink>
        </>
      )}
    </>
  );
};

export default QxFormJobType;
