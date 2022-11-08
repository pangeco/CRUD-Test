import React, { useContext } from 'react'
import FormContext from '../FormContext'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Select = (field) => {
    // const { handleChange } = useContext(FormContext)
  return (
      <Form.Group>
        <Form.Label className='p-2 m-1 font-bold uppercase'>Status</Form.Label>
        <Form.Select variant="secondary"
        onChange={(e) => field.onChange(e)}>
          {field.options.map((option, i) => 
            <option value={option.value} key={i}>{option.label}</option>
          )}
        </Form.Select>
    </Form.Group>
  )
}

export default Select