import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer } from '../store/features/customer/customerSlice';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Detail = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();

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
    
    const handleEdit = () => {
        // dispatch(setCustomer(data));
        navigate("/customer/" + data.id + "/edit" );
    }

    const handleDelete = async() => {
        let status = 0;
        if(data.status !=0 ){
            status = 0;
        }else{
            status = 1;
        }

        const url = 'http://localhost:8000/customer/' + id;
        axios({
            method: 'PUT',
            url: url,
            data: {
                nama: data.nama,
                ktp: data.ktp,
                alamat: data.alamat,
                status: status,
            }
        }).then(res => {
            navigate("/");
        }).catch(error => {});
    }

  return (
    <Container>
        <h1 className='m-2 p-2 flex justify-center font-bold text-xl uppercase'>Customer Profile</h1>
        <div className='m-2 p-3 border rounded-2 shadow-lg'>
            <div className='m-1 p-1 d-flex justify-content-end'>
                <Button variant='warning' className='mx-1' onClick={() => handleEdit()}>Edit</Button>
                {data.status != 0 ?
                    <Button onClick={() => handleDelete()} variant='danger' className="ml-1">DEACTIVE</Button>
                    : <Button onClick={() => handleDelete()} type='submit' className="btn btn-success m;-1">ACTIVE</Button>
                }
            </div>
            <Row className='border-bottom m-1 p-1'>
                <Col className='fw-bold' xs={2}>Nama</Col>
                <Col xs={1}>:</Col>
                <Col >{data.nama}</Col>
            </Row>
            <Row className='border-bottom m-1 p-1'>
                <Col className='fw-bold' xs={2}>No. KTP </Col>
                <Col xs={1}>:</Col>
                <Col>{data.ktp}</Col>
            </Row>
            <Row className='border-bottom m-1 p-1'>
                <Col className='fw-bold' xs={2}>Alamat</Col>
                <Col xs={1} md={1}>:</Col>
                <Col >{data.alamat}</Col>
            </Row>
            <Row className='border-bottom m-1 p-1'>
                <Col className='fw-bold' xs={2} md={2}>Status</Col>
                <Col xs={1}>:</Col>
                {data.status !=0 ? 
                <Col >Active</Col>
                : <Col >Non-Actie</Col>
                }
            </Row>
            
        </div>
    </Container>
  )
}

export default Detail;