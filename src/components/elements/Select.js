import React, { useContext } from 'react'
import FormContext from '../FormContext'

const Select = ({field, index}) => {
    const { handleChange } = useContext(FormContext)
  return (
    <div className='flex flex-col'>
        <label className='p-2 m-1 font-bold uppercase'>Status</label>
        <select className="border rounded-md my-1 mx-2 p-2"
        onChange={(e) => handleChange(field.id, e)}>
            {field.options.map((option, i) => 
                <option value={option.value} key={i}>{option.label}</option>
                )}
        </select>
    </div>
  )
}

export default Select