import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import moment from "moment";

import axios from "../../../axios-stage";
import QxTable from "../QxTable/QxTable";
import "./QxForm.css";
import image from "../../../Assets/logo.png";

const QxForm = (props) => {
  // States

  const [qxForm, setQxForm] = useState({
    startDate: "2020-05-01",
    endDate: "2020-05-15",
    stage: "",
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
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    let formData = { ...qxForm };
    setLoading(true);
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
        resp.data.length !== 0 ? handleDateFormat(resp.data) : setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
      setQxForm({
        startDate: "",
        endDate: "",
        stage: "",
      });
  };
 
  // Logic to split job_Address into Address, Community columns

  const handleSplitCol = (resp) => {
    resp.forEach((col) => {
        if(col.job_Address !== null){
          let addrProps = col.job_Address.split(/[-]+/);
          col.Address = addrProps[0];
          col.Community = addrProps[1];
        }
        else{
          return;
        }
      });
    setJobData(resp);
  };

  // Logic to change format of date

  const handleDateFormat = (resp) => {
    resp.forEach((col) => {
      let newDate = moment(col.job_Date).format("MM/DD/YYYY");
      col.job_Date = newDate;
    });
    setJobData(resp);
    console.log(resp);
  }

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
        <label id="stagelabel">Stage</label>
        <select
          name="stage"
          onChange={inputChangeHandler}
          value={qxForm.stage}
          aria-labelledby="stagelabel"
          aria-required="true"
          required
        >
          <option disabled value="">Select Stage</option>
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

export default QxForm;
