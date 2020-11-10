import React from "react";
import shortid from "shortid";
import "./QxList.css";

const QxList = (props) => {

  const jobData = props.formData;
  const headers = [
    { field: "job_Date", label: "Date" },
    { field: "job_Site", label: "Address" },
    { field: "job_City", label: "City" },
    { field: "job_Stage", label: "Stage" },
  ];


  return (
    <div className="FlexList">
          <table className="ResultsTable">
            <thead>
              <tr className="ResultsHeader">
                {headers.map((header) => (
                  <th key={header.field}>{header.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobData.map((job) => (
                <tr className="ResultsRow" key={shortid.generate()}>
                  <td key={shortid.generate()}>{job.job_Date}</td>
                  <td key={shortid.generate()}>{job.job_Site}</td>
                  <td key={shortid.generate()}>{job.job_City}</td>
                  <td key={shortid.generate()}>{job.job_Stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
  
};

export default QxList;
