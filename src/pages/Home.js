import React, { useEffect, useState, useMemo } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { createColumnHelper, useReactTable } from '@tanstack/react-table';
import FieldTable from '../components/FieldTable.json';



const GetTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useReactTable({ columns, data });

  return (
    <Table striped="columns" hover responsive="md">
    {/* <Table striped="columns" hover responsive="md" {...getTableProps}> */}
      <thead>
        {/* {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))} */}
        <tr>
          <th>No.</th>
          <th>Nama</th>
          <th>KTP</th>
          <th>ALamat</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {/* <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })} */}
      {data.map((field, index) => { return (
        <tr>
          <td>{field.id}</td>
          <td>{field.nama}</td>
          <td>{field.ktp}</td>
          <td>{field.alamat}</td>
          {field.status != 0 ?
            <td>Active</td>
            : <td>Non-Active</td>
          }
          <td className='flex flex-row my-1 py-1 justify-between'>
            <NavLink to={"/customer/" + field.id} className='btn btn-secondary'>Detail</NavLink>
          </td>
        </tr>
      )})}
      </tbody>
      
    </Table>
  )
}

const Home = () => {
  // const [elements, setElemennts] = useState(FieldTable[0]);
  const [data, setData] = useState([]);

  const columns = React.useMemo(() => [
    {
      Header: "Nama",
      accessor: "nama"
    }, {
      Header: "KTP",
      accessor: "ktp"
    }, {
      Header: "Alamat",
      accessor: "alamat"
    }, {
      Header: "Status",
      accessor: "status"
    },
  ], []);


  const getData = async() => {
    const url = 'http://localhost:8000/customer'
    axios({
      method: 'GET',
      url: url
    }).then(res => {
      setData(res.data)
    }).catch(error => {});
  }
  useEffect(() => {
    getData();
  }, []);

  // setData = React.useMemo(() => makeData(20), [])

  return (
    <div>
      <div className='border border-grey rounded-3 m-2 shadow-lg p-4'>
        <p className='d-flex flex-row justify-content-center m-2 p-2 fw-bold text-uppercase fs-2'>Data Customer</p>
        <GetTable columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default Home;