import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

import axios from "../../../axios-stage";
import QxTable from "../QxTable/QxTable";
import "./QxForm.css";
import image from "../../../Assets/logo.png";

const QxForm = props => {
  // States

  const [qxForm, setQxForm] = useState({
    address: "",
    startDate: "2020-05-01",
    endDate: "2020-05-15",
    stage: "Select",
  });

  const [jobData, setJobData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (jobData.length > 0) {
      setLoading(false);
    }
  }, [jobData]);

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
          resp.data.length !== 0 ? handleSplitCol(resp.data) : setLoading(false);
        })
        .catch((err) => {
          alert(err);
          setLoading(false);
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
          resp.data.length !== 0 ? handleSplitCol(resp.data) : setLoading(false);
        })
        .catch((err) => {
          alert(err);
          setLoading(false);
        });
    }
    setQxForm({
      address: "",
      startDate: "",
      endDate: "",
      stage: "Select",
    });
  };

  const handleSplitCol = (resp) => {
    resp.forEach(col => {
      if(col.job_Site.includes("LGI") || col.job_Site.includes("K. Hov")){
        let splitBuilder = col.job_Site.split(/[:]+/);
        let splitAddr = splitBuilder[1].split(/[-]+/);
        col.Builder = splitBuilder[0];
        col.Address = splitAddr[0];
        col.Community = splitAddr[1];
      }
      else {
        let newprops = col.job_Site.split(/[:-]+/);
        col.Builder = newprops[0];
        col.Address = newprops[1];
        col.Community = newprops[2];
      }
    });
    setJobData(resp);
    console.log(resp);
  }


  return (
    <>
      <form className="GridForm" onSubmit={submitFormHandler}>
        <label id="addrlabel">Street Address</label>
        <input
          type="text"
          name="address"
          value={qxForm.address}
          onChange={inputChangeHandler}
          aria-required="false"
          aria-labelledby="addrlabel"
        />
        <label id="startlabel">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={qxForm.startDate}
          onChange={inputChangeHandler}
          aria-labelledby="startlabel"
          aria-required="true"
        />
        <label id="endlabel">End Date</label>
        <input
          type="date"
          name="endDate"
          value={qxForm.endDate}
          onChange={inputChangeHandler}
          aria-labelledby="endlabel"
          aria-required="true"
        />
        <label id="stagelabel">Stage</label>
        <select
          name="stage"
          onChange={inputChangeHandler}
          value={qxForm.stage}
          aria-labelledby="stagelabel"
          aria-required="true"
        >
          <option value="Select" aria-labelledby="stagelabel">
            Select Stage
          </option>
          <option value="Rough" aria-labelledby="stagelabel">
            Rough
          </option>
          <option value="Topout" aria-labelledby="stagelabel">
            Topout
          </option>
          <option value="Trim" aria-labelledby="stagelabel">
            Trim
          </option>
        </select>
        <button type="submit">Pull Data</button>
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
      </form>
      {isLoading ? (
        <img className="CPTFade" src={image} alt="Cathedral Logo" />
      ) : (
        <QxTable formData={jobData} />
      )}
    </>
  );
};

export default QxForm;
