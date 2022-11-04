import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Element from '../components/Element';
import FormField from '../components/FormField.json' ;
import FormContext from '../components/FormContext';

const Insert = () => {
    const [elements, setElemennts] = useState(FormField[0]);
    const { fields, page_label } = elements;
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState([{name: '', phone: '', email: '', address: '', status: ''}]);

    const handleChange = (id, event) => {
        console.log("handle change");
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

    const handleFormChange = (index, event) => {
        const data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = () => {
        const newField = {
            name: '', 
            ktp: '',
            email: '',
            address: '', 
            status: ''
        }
        setInputFields([...inputFields, newField]);
    }
    
    // useEffect(() => {
    //     console.log(fields);
    // }, []);

    const removeField = (index) => {
        const newField = [...inputFields];
        newField.splice(index, 1);
        setInputFields(newField);
    }
    const handleSubmit = (event) => {
        console.log("handle Submit");
        event.preventDefault();
        console.log(elements);
        const { fields } = elements;
        const newValue = {};
        fields.map((field, index) => {
            newValue[field.id] = field.value
        }) 
        console.log(newValue);
        const url = 'http://localhost:8000/customers'
        axios({
            method: 'POST',
            url: url,
            data: newValue,
        }).then(res => {
        }).catch(error => {});
        navigate("/");
    }
  return (
    <FormContext.Provider value={ { handleChange } }>
        <div className='mx-2'>
            <p className='flex justify-center font-bold uppercase text-xl m-2 p-2'>Add {page_label}</p>
            <form onSubmit={() => handleSubmit()}>
                <div className='block p-4 shadow-lg rounded-lg border-grey border'>
                    {fields ? fields.map((field, index) => 
                        <Element key={index} field={field} />
                        ) : null}
                    <div className='m-2'>
                        {/* <button onClick={() => addFields()} type="button" className="p-2 bg-blue-600 text-white rounded-md mx-2">Add More</button> */}
                        <button onClick={(e) => handleSubmit(e)} type='submit' className="p-2 bg-green-600 text-white font-bold rounded-md mx-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </FormContext.Provider>
  )
}

export default Insert;