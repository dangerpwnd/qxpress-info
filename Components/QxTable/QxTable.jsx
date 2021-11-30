import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Modal from '../Modal';
import { useTable, useSortBy, usePagination } from 'react-table';

const QxTable = (props) => {
  const { formData } = props;

  const [notes, setNotes] = useState([]);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      const outer = document.querySelector('.outer');
      outer.classList.remove('open');
    }
  });

  const clickFunction = (event) => {
    if (event.target.matches('.inner')) {
      const outer = document.querySelector('.outer');
      outer.classList.remove('open');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    document.addEventListener('click', clickFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
      document.removeEventListener('click', clickFunction, false);
    };
  }, []);

  const handleOpenModal = () => {
    const outer = document.querySelector('.outer');
    outer.classList.add('open');
  };

  const data = useMemo(() => {
    return formData;
  }, [formData]);

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'jobDate',
        Cell: ({ value }) => {
          const date = new Date(value).toISOString().split('T')[0];
          return date;
        },
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
        accessor: 'jobNotes',
        Cell: ({ value }) => (
          <button
            className="text-x1 text-white font-bold border-2 m-2 p-2 border-white rounded-lg bg-mute-purp hover:bg-white focus:bg-white hover:border-mute-purp focus:border-mute-purp hover:text-mute-purp focus:text-mute-purp"
            onClick={() => {
              let notes = { value };
              let splitNotes = notes.value.split('\n');
              setNotes(splitNotes);
              handleOpenModal();
            }}
          >
            Job Notes
          </button>
        ),
      },
      {
        Header: 'Color',
        accessor: 'jobColor',
        Cell: ({ value }) => {
          switch (value) {
            case 'white':
              return <span className="bg-white text-white block">white</span>;
              break;
            case 'teal':
              return <span className="bg-teal text-teal block">teal</span>;
              break;
            case 'orange':
              return (
                <span className="bg-orange text-orange block">orange</span>
              );
              break;
            case 'yellow':
              return (
                <span className="bg-yellow text-yellow block">yellow</span>
              );
              break;
            case 'grey':
              return <span className="bg-grey text-grey block">grey</span>;
              break;
            case 'green':
              return <span className="bg-green text-green block">green</span>;
              break;
            case 'red':
              return <span className="bg-red text-red block">red</span>;
              break;
            case 'pink':
              return <span className="bg-pink text-pink block">pink</span>;
              break;
            case 'brown':
              return <span className="bg-brown text-brown block">brown</span>;
              break;
            default:
              return <span className="bg-white text-white block">white</span>;
              break;
          }
        },
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

  return (
    <div className="flex flex-col items-center mb-4">
      <table
        {...getTableProps()}
        className="mb-4 border-collapse rounded-lg overflow-hidden text-sm lg:text-xl"
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="grid grid-cols-10 border-b-4 border-white bg-off-white"
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
          <label id="pageNumber">| Go to page: </label>
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
      <Modal notes={notes} />
    </div>
  );
};

export default QxTable;
