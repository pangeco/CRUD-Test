import React, { useContext } from 'react';
import FormContext from '../FormContext';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";


const Text = ({ field }) => {
  const { handleChange } = useContext(FormContext);
  const { register } =  useForm();
  return (
    <Form.Group>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control type="text" placeholder={field.placeholder} value={field.value} maxLength={32} onChange={e => handleChange(field.id, e)} />
      {/* <input /> */}
    </Form.Group>
  )
}

export default Text
