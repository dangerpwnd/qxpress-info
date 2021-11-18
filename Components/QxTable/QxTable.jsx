import React, { useState, useMemo } from 'react';
import Modal from '../Modal';
import { useTable, useSortBy, usePagination } from 'react-table';

const QxTable = (props) => {
  const { formData } = props;

  const [showModal, setShowModal] = useState(false);

  const data = useMemo(() => {
    return formData;
  }, [formData]);

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'jobDate',
      },
      {
        Header: 'Builder',
        accessor: 'jobBuilder',
      },
      {
        Header: 'Community',
        accessor: 'Community',
      },
      {
        Header: 'Address',
        accessor: 'Address',
      },
      {
        Header: 'City',
        accessor: 'jobCity',
      },
      {
        Header: 'ZIP',
        accessor: 'jobPostal',
      },
      {
        Header: 'Stage',
        accessor: 'jobStage',
      },
      {
        Header: 'Notes',
        accessor: 'job_Notes',
        Cell: ({ cell }) => (
          <button
            value="Job Notes"
            className="text-x1 text-white font-bold border-2 m-2 p-2 border-white rounded-lg bg-mute-purp hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp"
            onClick={() => {
              handleOpenModal(cell.value);
            }}
          >
            Job Notes
          </button>
        ),
      },
      {
        Header: 'Color',
        accessor: 'jobColor',
      },
      {
        Header: 'Crew',
        accessor: 'jobCrew',
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

  const handleOpenModal = (notes) => {
    setShowModal(true);
    return <Modal show={showModal} notes={notes} />;
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <table
        {...getTableProps()}
        className="mb-4 border-collapse rounded-lg overflow-hidden"
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="grid grid-cols-10 border-b-4 border-white-500 bg-off-white"
              >
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      className="text-black"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render('Header')
                      }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' ⇩'
                            : ' ⇧'
                          : ''}{' '}
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
              <tr
                {...row.getRowProps()}
                className="grid grid-cols-10 items-center text-center QxRows"
              >
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td className="text-white" {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
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
          {'↞'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'←'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'→'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'↠'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            className="text-black pl-2"
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          className="text-black"
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
    </div>
  );
};

export default QxTable;
