import React from 'react';
import Form from 'react-bootstrap/Form';

const Text = ({ field, register}) => {
  // const { handleChange } = useContext(FormContext);
  return (
    <Form.Group className='m-2'>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control type={field.type} maxLength={field.rules.maxLength}
        {...register(field.name, field.rules)}
      />
    </Form.Group>
  )
}

export default Text
