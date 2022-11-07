import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import FieldTable from '../components/FieldTable.json';

const customer = {
  name: String,
  ktp: String,
  alamat: String,
  status: String,
}
const columnHelper = createColumnHelper(customer);

const columns = [
  columnHelper.accessor("nama", {
    header: 'Nama',
  }),
  columnHelper.accessor("ktp", {
    header: 'KTP',
  }),
  columnHelper.accessor("alamat", {
    header: 'Alamat',
  }),
  columnHelper.accessor("status", {
    header: 'Status',
  }),
]

const Home = () => {
  const [elements, setElemennts] = useState(FieldTable[0]);
  const [data, setData] = useState([]);

  const table = useReactTable({ data, columns, getCoreRowModel});

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

  return (
    <div>
      {/* <input type="text" value={e => setSearchQuery({ query: e.target.value })} /> */}
      <div className='border border-grey rounded-3 m-2 shadow-lg p-4'>
        <p className='d-flex flex-row justify-content-center m-2 p-2 fw-bold text-uppercase fs-2'>Data Customer</p>
        <Table striped="columns" hover responsive="md" >
          <thead>
          {/* {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
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
          {/* {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))} */}
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
      </div>
    </div>
  )
}

export default Home;