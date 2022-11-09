import React from 'react'
import Form from 'react-bootstrap/Form';

const Select = ({ field, register}) => {
  return (
      <Form.Group className='m-2'>
        <Form.Label>Status</Form.Label>
        <Form.Select
        defaultValue={field.defaultValue}
        {...register(field.name, field.rules)}>
          {field.options.map((option, i) => 
            <option value={option.value} key={i}>{option.label}</option>
          )}
        </Form.Select>
    </Form.Group>
  )
}

export default Select