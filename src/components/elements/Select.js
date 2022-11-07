import React, { useContext } from 'react'
import FormContext from '../FormContext'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Select = ({field, index}) => {
    const { handleChange } = useContext(FormContext)
  return (
      <div>
        <label className='p-2 m-1 font-bold uppercase'>Status</label>
        <Form.Select variant="secondary"
        onChange={(e) => handleChange(field.id, e)}>
          {field.options.map((option, i) => 
            <option value={option.value} key={i}>{option.label}</option>
          )}
        </Form.Select>
    </div>
  )
}

export default Select