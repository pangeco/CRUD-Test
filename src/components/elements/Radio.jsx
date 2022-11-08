import React from 'react'

const Radio = ({ field, index}) => {
  return (
    <div className='p-2 flex item-center'>
      <p className='m-1'>Status :</p>
      <div className='radio m-1 '>
          <input type="radio"
          className='mx-1' value="Active" checked={true}
          // onChange={e => handleFormChange(index, e)}
          />
          <label>Active</label>
      </div>
      <div className='radio m-1'>
          <input type="radio" 
          className='mx-1' value="Nonactive" checked={false}
          // onChange={e => handleFormChange(index, e)}
          />
          <label>Nonctive</label>
      </div>
  </div>
  )
}

export default Radio
