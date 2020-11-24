import React, {useState, useEffect} from "react";
import shortid from "shortid";
import ReactPaginate from 'react-paginate';

import "./QxList.css";

const QxList = (props) => {

  //Paginate State
  const [paginate, setPaginate] = useState({
      offset: 0,
      perPage: 10,
      currentPage: 0,
      pageCount: 0
  })

  // Table headers
  const headers = [
    { field: "job_Date", label: "Date" },
    { field: "job_Site", label: "Address" },
    { field: "job_City", label: "City" },
    { field: "job_Stage", label: "Stage" },
  ];

  //Job Data
  const jobData = props.formData;
  const sliceData = jobData.slice(paginate.offset, paginate.offset + paginate.perPage);

  useEffect(() => {
    setPaginate({
      ...paginate,
      pageCount: Math.ceil(jobData.length / paginate.perPage)
    })}, [jobData]);
  

  //Setting Page/Per Page
  const pageClickHandler = (e) => {
    const selectPage = e.selected;
    const offset = selectPage * paginate.perPage;

    setPaginate({
      ...paginate,
      currentPage: selectPage,
      offset: offset
    });

  }

  return (
    <div className="FlexList">
          <table className=" ResultsTable">
            <thead>
              <tr className="ResultsHeader FlexTable">
                {headers.map((header) => (
                  <th key={header.field}>{header.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sliceData.map((job) => (
                <tr className="ResultsRow FlexTable" key={shortid.generate()}>
                  <td key={shortid.generate()}>{job.job_Date}</td>
                  <td key={shortid.generate()}>{job.job_Site}</td>
                  <td key={shortid.generate()}>{job.job_City}</td>
                  <td key={shortid.generate()}>{job.job_Stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={paginate.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageClickHandler}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        </div>
  );
  
};

export default QxList;
