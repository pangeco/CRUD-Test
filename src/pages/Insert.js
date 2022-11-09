import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Element from '../components/Element';
import FieldTable from '../components/FieldTable.json';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useForm } from "react-hook-form";

const MySwal = withReactContent(Swal);

const Insert = () => {
    const { register, handleSubmit } = useForm();
    const [elements, setElemennts] = useState(FieldTable[0]);
    const { fields, title } = elements;
    const navigate = useNavigate();

    const hanldeAlert = () => {
        MySwal.fire({
           title: <p>Berhasil</p>,
           icon: 'success',
           text: 'Data Berhasil dimasukkan',
           showConfirmButton: false,
           timer: 3000
        });
    }

    const onSubmit = (data) => {
        console.log("handle Submit");
        const { nama, ktp, alamat, email } = data;
        const url = 'http://localhost:8000/customer';
        axios({
            method: 'POST',
            url: url,
            data: { nama, ktp, alamat, email },
        }).then(res => {
            hanldeAlert();
            navigate("/");
        }).catch(error => {});
    }
  return (
    // <FormContext.Provider value={ { handleChange }>
        <div className='mx-2'>
            <p className='flex justify-center font-bold uppercase text-xl m-2 p-2'>New {title}</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className='block p-4 shadow-lg rounded-3 border-grey border'>
                    {fields.map((field, index) => (
                        <Element field={field} key={index} register={register}/>
                    ))}
                    <div className='m-2'>
                        <Button onClick={handleSubmit(onSubmit)} type='submit' variant="primary">Submit</Button>
                    </div>
                </div>
            </Form>
        </div>
    // </FormContext.Provider>
  )
}

export default Insert;