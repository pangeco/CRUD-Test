import React,{ useState } from 'react'
import { useReactTable } from '@tanstack/react-table';
import { useTable, usePagination } from 'react-table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Table = ({columns ,data}) => {
  const tableInstance = useTable({ columns, data, inititalState: { pageIndex: 1} }, usePagination);
  const [sizes, setSizes] = useState([10, 20, 30, 40, 50, 100]);
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize}
  } = tableInstance;
  
  return (
    <div>
      <div className='d-flex flex-row m-2 p-2'>
        <Button variant='secondary' size="sm" className='mx-1' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</Button>
        <Button variant='secondary' size="sm" className='mx-1' onClick={() => previousPage()} disabled={!canPreviousPage}>{"<"}</Button>
        <Button variant='secondary' size="sm" className='mx-1' onClick={() => nextPage()} disabled={!canNextPage}>{">"}</Button>
        <Button variant='secondary' size="sm" className='mx-1' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</Button>
        <Form.Group className='mx-1 d-flex flex-row'>
        <Form.Select className='mx-1' value={pageSize} onChange={e => setPageSize(e.target.value)}>
          {sizes.map((size, i) => 
            <option value={size} key={i}>{size}</option>
            )}
        </Form.Select>
        </Form.Group>
      </div>
      <table {...getTableProps()} className="table table-hover">
        <thead className='table-light m-2'>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                    </td>
                )})}
              </tr>
            )
          })}
        </tbody>
        <tfoot >

        </tfoot>
      </table>
      
    </div>
  )
}

export default Table