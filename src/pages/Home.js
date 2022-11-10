import React, { useEffect, useState, useMemo } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
// import Table from 'react-bootstrap/Table';
import { createColumnHelper, useReactTable } from '@tanstack/react-table';
import FieldTable from '../components/FieldTable.json';
import Table from '../components/Table';
import { Button } from 'react-bootstrap';


const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Columns = [
    {
      Header: " ",
      accessor: 'id',
      Cell: ({row}) => <p>{row.index + 1}</p>
    },
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
      Cell: ({row}) => {
        const value = row.values.status;
        switch(value){
          case 1: return <p className='fs-6'>Active</p>;
          case 0: return <p className='fs-6'>Non-Acive</p>
          default: return null
        }
      }
    }, {
      Header: " ",
      accessor: '',
      Cell: ({row}) => {
        const onClick = () => {
          navigate('/customer/' + row.values.id);
        }
        return (
          <Button onClick={onClick} variant="primary" size="sm">Detail</Button>
        )
      }
    }, 
  ]

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
      <div className='border border-grey rounded-3 m-2 shadow-lg p-2'>
        <p className='mx-2 px-2 fw-bold text-uppercase fs-2'>Data Customer</p>
        <Table columns={columns} data={data}/>
      </div>
    </div>
  )
}

export default Home;