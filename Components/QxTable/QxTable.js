import React, { useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import ReactModal from 'react-modal';

import "./QxTable.module.css";

const QxTable = (props) => {
  const { formData } = props;

  const [showModal, setShowModal] = useState(false);

  const [jobInfo, setJobInfo] = useState({content: ""})

  const data = useMemo(() => {
    return formData;
  }, [formData]);

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "jobDate",
      },
      {
        Header: "Builder",
        accessor: "jobBuilder",
      },
      {
        Header: "Community",
        accessor: "Community",
      },
      {
        Header: "Address",
        accessor: "Address",
      },
      {
        Header: "City",
        accessor: "jobCity",
      },
      {
        Header: "ZIP",
        accessor: "jobPostal"
      },
      {
        Header: "Stage",
        accessor: "jobStage",
      },
      {
        Header: "Notes",
        accessor: "job_Notes",
        Cell: ({cell}) => (
          <button value="Job Notes" onClick={() => {handleNotesClick(cell.value)}}>Job Notes</button>
        ),
      },
      {
        Header: "Color",
        accessor: "jobColor",
      },
      {
        Header: "Crew",
        accessor: "jobCrew",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const handleNotesClick = (jobinfo) => {
    console.log(jobinfo);
    setJobInfo({content: jobinfo});
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="FlexList">
      <table {...getTableProps()} className=" ResultsTable">
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="ResultsHeader FlexTable"
              >
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ⇩"
                            : " ⇧" 
                          : ""}{" "}
                      </span>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="ResultsRow FlexTable">
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"↞"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"←"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {"→"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {"↠"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* <ReactModal
        isOpen={showModal}
        contentLabel={"Job Notes"}
        appElement={document.getElementById('root')}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        overlayClassName={"Overlay"}
        className={"Modal"}
      >
        <p>{jobInfo.content}</p>
      </ReactModal> */}
    </div>
  );
};

export default QxTable;
