import React, { useEffect, useState, useMemo } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
// import Table from 'react-bootstrap/Table';
import { createColumnHelper, useReactTable } from '@tanstack/react-table';
import FieldTable from '../components/FieldTable.json';
import Table from '../components/Table';

const Columns = [
  {
      Header: "Nama",
      accessor: 'nama',
  }, {
      Header: "KTP",
      accessor: 'ktp',
  }, {
      Header: "Alamat",
      accessor: 'alamat',
  }, {
    Header: "Status",
    accessor: 'status',
}, 
]

const Home = () => {
  const [data, setData] = useState([]);
  const columns = useMemo(() => Columns,[]);

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
        <Table columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default Home;