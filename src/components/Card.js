import React from 'react'

const Card = ({field, index}) => {
  return (
    <div className='block p-4 shadow-lg rounded-lg border-black '>
        <p className='font-bold'>{field.nama}</p>
        <p className='text'>{field.ktp}</p>
        <p className='text'>{field.alamat}</p>
        <p className='text'>{field.status}</p>
        {/* <div className=''>
        <button className='p-2 rounded-md bg-blue-600 text-white font-medium uppercase'>Detail</button>
        </div> */}
    </div>
  )
}

export default Card