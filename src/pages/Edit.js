import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Element from '../components/Element';
import FieldTable from '../components/FieldTable.json';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Edit = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [elements, setElemennts] = useState(FieldTable[0]);
    const { fields, title } = elements;
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    
    const hanldeAlert = () => {
        MySwal.fire({
           title: <p>Berhasil</p>,
           icon: 'success',
           text: 'Data Berhasil diubah',
           showConfirmButton: false,
           timer: 3000
        });
    }
    
    const getData = async() => {
        const url = 'http://localhost:8000/customer/' + id;
        axios({
          method: 'GET',
          url: url
        }).then(res => {
          setData(res.data);
        }).catch(error => {});
      }
  
      useEffect(() => {
        getData();
    }, []);
    
    useEffect(() => {
        for(const property in data){
            if(data.hasOwnProperty(property)){
                setValue(property, data[property]);
            }
        }
      },[data]);

    const onSubmit = (data) => {
        const { nama, ktp, alamat, email } = data;
        const url = 'http://localhost:8000/customer/' + data.id;
        axios({
            method: 'PUT',
            url: url,
            data: { nama, ktp, alamat, email },
        }).then(res => {
            hanldeAlert();
            navigate("/customer/" + data.id);
        }).catch(error => {});
    }

  return (
    <div className='mx-2'>
        <p className='m-2 p-2 text-uppercase fw-bold fs-2'>Edit {title}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='block p-4 shadow-lg rounded-lg border-grey border'>
                {fields.map((field, index) => (
                    <Element field={field} key={index} register={register} mode="edit"/>
                ))}
                <div className='m-2'>
                    <Button onClick={handleSubmit(onSubmit)} type='submit' variant="primary">Submit</Button>
                </div>
            </div>
        </Form>
    </div>
  )
}

export default Edit;