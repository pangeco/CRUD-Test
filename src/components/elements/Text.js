import React, { useContext } from 'react';
import FormContext from '../FormContext';

const Text = ({ field }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className='flex flex-col'>
      <label className='p-2 m-1 font-bold uppercase'>{field.label}</label>
      <input type='text' name={field.name} placeholder={field.placeholder}
      value={field.value} maxLength={32}
      onChange={e => handleChange(field.id, e)}
      className="border rounded-md m-1 p-2  "/>
    </div>
  )
}

export default Text
