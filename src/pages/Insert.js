import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Element from '../components/Element';
import FieldTable from '../components/FieldTable.json';
import FormContext from '../components/FormContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useForm } from "react-hook-form";

const MySwal = withReactContent(Swal);

const Insert = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [elements, setElemennts] = useState(FieldTable[0]);
    const { fields, page_label } = elements;
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState([{name: '', phone: '', email: '', address: '', status: ''}]);

    const hanldeAlert = () => {
        MySwal.fire({
           title: <p>Berhasil</p>,
           icon: 'success',
           text: 'Data telah dimasukkan',
           showConfirmButton: false,
        });
    }

    const handleChange = (id, event) => {
        const newElements = { ...elements };
        newElements.fields.forEach(field => {
            if(id === field.id){
                switch (field.type) {
                    case "checkkox":
                        field['value'] = event.target.checked
                    default:
                        field['value'] = event.target.value;
                        break;
                }
            }
        });
        setElemennts(newElements);
    }

    // const handleFormChange = (index, event) => {
    //     const data = [...inputFields];
    //     data[index][event.target.name] = event.target.value;
    //     setInputFields(data);
    // }
    // const addFields = () => {
    //     const newField = {
    //         name: '', 
    //         ktp: '',
    //         email: '',
    //         address: '', 
    //         status: ''
    //     }
    //     setInputFields([...inputFields, newField]);
    // }
    
    // useEffect(() => {
    //     console.log(fields);
    // }, []);

    // const removeField = (index) => {
    //     const newField = [...inputFields];
    //     newField.splice(index, 1);
    //     setInputFields(newField);
    // }

    // const handleValidIinput = () => {

    // }

    const onSubmit = (event) => {
        console.log("handle Submit");
        event.preventDefault();

        // const { fields } = elements;
        // const newValue = {};
        // fields.map((field, index) => {
        //     newValue[field.id] = field.value
        // }) 
        // console.log(newValue);
        // const url = 'http://localhost:8000/customer';
        // axios({
        //     method: 'POST',
        //     url: url,
        //     data: newValue,
        // }).then(res => {
        //     hanldeAlert();
        //     navigate("/");
        // }).catch(error => {});
    }
  return (
    <FormContext.Provider value={ { handleChange } }>
        <div className='mx-2'>
            <p className='flex justify-center font-bold uppercase text-xl m-2 p-2'>Add {page_label}</p>
            <Form onSubmit={(e) => onSubmit(e)}>
                <div className='block p-4 shadow-lg rounded-lg border-grey border'>
                    {fields ? fields.map((field, index) => 
                        <Element key={index} field={field} />
                        ) : null}
                    <div className='m-2'>
                        {/* <button onClick={() => addFields()} type="button" className="p-2 bg-blue-600 text-white rounded-md mx-2">Add More</button> */}
                        <Button onClick={(e) => onSubmit(e)} type='submit' variant="success">Submit</Button>
                    </div>
                </div>
            </Form>
        </div>
    </FormContext.Provider>
  )
}

export default Insert;