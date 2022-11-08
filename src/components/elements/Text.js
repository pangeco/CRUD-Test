import React, { useContext } from 'react';
import FormContext from '../FormContext';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";


const Text = ({label, value, onChange, type, ...rest}) => {
  // const { handleChange } = useContext(FormContext);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      {/* <input type="text" placeholder={rest?.placeholder} value={value} onChange={e => onChange(e)}/> */}
      <Form.Control name={rest.name} type="text" placeholder={rest.placeholder} value={value} onChange={e => onChange(rest.id, e.target.value)} />
    </Form.Group>
  )
}

export default Text
