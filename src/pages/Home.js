import React, { useEffect, useState } from 'react'
import { useSearchParams, NavLink } from "react-router-dom";
import Card from "../components/Card";
import axios from 'axios';
import { MdPerson } from "react-icons/md";

const Home = () => {
    // const [searchQuery, setSearchQuery] = useSearchParams({ SearchQuery: ''});

    const [data, setData] = useState([]);

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
    <div className=''>
      {/* <input type="text" value={e => setSearchQuery({ query: e.target.value })} /> */}
      <p className='flex justify-center text-xl font-bold uppercase mb-2 p-2'>Data</p>
      <div className='flex flex-row justify-center m-2'>
      {data.map((field, index) => {
        return (
          <div className='block p-4 shadow-lg rounded-lg border-grey border m-2 '>
            <p className='font-bold'>{field.nama}</p>
            <p className='text'>{field.ktp}</p>
            <p className='text'>{field.alamat}</p>
            {field.status != 0 ?
              <p className='text'>Active</p>
              : <p className='text'>Non-Active</p>
            }
            <div className='flex flex-row my-1 py-1 justify-between'>
              <NavLink to={"/customer/" + field.id} className='p-2 rounded-md bg-blue-600 text-white font-medium'>Detail</NavLink>
              <MdPerson size={32} className="self-center"/>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Home;