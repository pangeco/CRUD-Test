import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer } from '../store/features/customer/customerSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Detail = ({ index }) => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const customer = useSelector(state => state.customer);

    const dispatch = useDispatch();

    const getData = async() => {
      const url = 'http://localhost:8000/customer/' + id;
      axios({
        method: 'GET',
        url: url
      }).then(res => {
        setData(res.data);
      }).catch(error => {});
    }

    useEffect(() => {
      getData();
    }, []);
    
    const handleEdit = () => {
        dispatch(setCustomer(data));
        navigate("/customer/" + data.id + "/edit");
    }

    const handleDelete = async(event) => {
        let status = 0;
        if(data.status !=0 ){
            status = 0;
        }else{
            status = 1;
        }

        const url = 'http://localhost:8000/customer/' + id;
        axios({
            method: 'PUT',
            url: url,
            data: {
                nama: data.nama,
                ktp: data.ktp,
                alamat: data.alamat,
                status: status,
            }
        }).then(res => {
            navigate("/");
        }).catch(error => {});
    }

  return (
    <div>
        <h1 className='m-2 p-2 flex justify-center font-bold text-xl uppercase'>Customer Data</h1>
        <div className='m-2 p-2 border rounded-2 shadow-lg'>
            <div className='m-2 p-2 d-flex justify-content-end'>
                <Button variant='warning' className='mx-1' >Edit</Button>
                {data.status != 0 ?
                    <button onClick={(e) => handleDelete(e)} type='submit' className="btn btn-danger ml-1">DEACTIVE</button>
                    : <button onClick={(e) => handleDelete(e)} type='submit' className="btn btn-success m;-1">ACTIVE</button>
                }
            </div>
            <div className='d-flex flex-row'>
                <p className='fw-bold'>Nama</p>
                <p className='mx-2'>:</p>
                <p className='flex flex-auto'>{data.nama}</p>
            </div>
            <div className='d-flex flex-row'>
                <p className='fw-bold'>No. KTP </p>
                <p className='mx-2'>:</p>
                <p className='flex-auto'>{data.ktp}</p>
            </div>
            <div className='d-flex flex-row'>
                <p className='fw-bold'>Alamat</p>
                <p className='mx-2'>:</p>
                <p className='flex-auto'>{data.alamat}</p>
            </div>
            <div className='d-flex flex-row'>
                <p className='fw-bold'>Status</p>
                <p className='mx-2'>:</p>
                {data.status !=0 ? 
                <p className='flex-auto'>Active</p>
                : <p className='flex-auto'>Non-Actie</p>
                }
            </div>
            
        </div>
    </div>
  )
}

export default Detail;