import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

const Detail = ({ index }) => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

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
    <div className='m-2 p-2 border rounded-lg shadow-lg'>
        <div className='flex flex-row m-2'>
            <p className='font-bold basis-1/5'>Nama</p>
            <p className='mx-2'>:</p>
            <p className='flex flex-auto'>{data.nama}</p>
        </div>
        <div className='flex flex-row m-2'>
            <p className='font-bold basis-1/5'>No. KTP </p>
            <p className='mx-2'>:</p>
            <p className='flex-auto'>{data.ktp}</p>
        </div>
        <div className='flex flex-row m-2'>
            <p className='font-bold basis-1/5'>Alamat</p>
            <p className='mx-2'>:</p>
            <p className='flex-auto'>{data.alamat}</p>
        </div>
        <div className='flex flex-row m-2'>
            <p className='font-bold basis-1/5'>Status</p>
            <p className='mx-2'>:</p>
            {data.status !=0 ? 
            <p className='flex-auto'>Active</p>
            : <p className='flex-auto'>Non-Actie</p>
            }
        </div>
        <NavLink to={"/customer/" + data.id + "/edit"} 
        data={data}
        className="p-2 bg-yellow-600 text-white font-bold rounded-md m-2 uppercase">Edit</NavLink>

        {data.status != 0 ?
            <button onClick={(e) => handleDelete(e)} type='submit' className="p-2 bg-red-600 text-white font-bold rounded-md m-2 uppercase">DEACTIVE</button>
            : <button onClick={(e) => handleDelete(e)} type='submit' className="p-2 bg-green-600 text-white font-bold rounded-md m-2 uppercase">ACTIVE</button>
        }
        </div>
    </div>
  )
}

export default Detail;