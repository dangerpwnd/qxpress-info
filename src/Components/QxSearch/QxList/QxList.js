import React, { useState, useEffect } from "react";
import shortid from "shortid";
import ReactPaginate from "react-paginate";

import "./QxList.css";

const initialPaginate = {
  offset: 0,
  perPage: 10,
  currentPage: 0,
  pageCount: 0,
};

const QxList = (props) => {
  //Paginate State
  const [paginate, setPaginate] = useState(initialPaginate);

  //Job Data
  const { formData, hasSubmit } = props;

  useEffect(() => {
    if (hasSubmit) {
      let object = { ...initialPaginate };
      object.pageCount = Math.ceil(formData.length / object.perPage);
      setPaginate(object);
    }
  }, [hasSubmit, formData]);

  //Setting Page/Per Page
  const pageClickHandler = (e) => {
    const selectPage = e.selected;
    const offset = selectPage * paginate.perPage;

    setPaginate({
      ...paginate,
      currentPage: selectPage,
      offset: offset,
    });
  };

  const sliceData = formData.slice(
    paginate.offset,
    paginate.offset + paginate.perPage
  );

  // Table headers
  const headers = [
    { field: "job_Date", label: "Date" },
    { field: "Builder", label: "Builder" },
    { field: "Community", label: "Community" },
    { field: "Address", label: "Address"},
    { field: "job_City", label: "City" },
    { field: "job_Stage", label: "Stage" },
  ];

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
              {headers.map((header) => (
              <td key={shortid.generate()}>{job[header.field]}</td>
              ))}
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
        activeClassName={"active"}
      />
    </div>
  );
};

export default QxList;
