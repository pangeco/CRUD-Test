import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomer } from '../store/features/customer/customerSlice';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Detail = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const hanldeAlert = () => {
        MySwal.fire({
           title: <p>Berhasil</p>,
           icon: 'success',
           text: 'Data Telah Dihapus',
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
    
    const handleEdit = () => {
        // dispatch(setCustomer(data));
        navigate("/customer/" + data.id + "/edit" );
    }

    const handleDelete = async() => {
        // let status = 0;
        // if(data.status !=0 ){
        //     status = 0;
        // }else{
        //     status = 1;
        // }

        const url = 'http://localhost:8000/customer/' + id;
        axios({
            method: 'DELETE',
            url: url,
            // data: {
            //     nama: data.nama,
            //     ktp: data.ktp,
            //     alamat: data.alamat,
            //     status: status,
            // }
        }).then(res => {
            hanldeAlert();
            navigate("/");
        }).catch(error => {});
    }

    const handleWarning = (event) => {
        event.preventDefault();
        MySwal.fire({
            title: <p>PERINGATAN !</p>,
            icon: 'warning',
            text: 'Hapus Data?',
            showCancelButton: true,
            confirmButtonText: 'IYA',
            cancelButtonText: "Tidak",
        }).then(result => {
            if(result.isConfirmed){
                handleDelete();
            }
        })
    }

  return (
    <Container>
        <h1 className='m-2 p-2 fs-2 fw-bold'>Customer Profile</h1>
        <div className='m-2 p-3 border rounded-2 shadow-lg'>
            <div className='m-1 p-1 d-flex justify-content-end'>
                <Button variant='warning' size="sm" className='mx-1' onClick={() => handleEdit()}>UBAH</Button>
                <Button onClick={(e) => handleWarning(e)} variant='danger' size="sm" className="ml-1">HAPUS</Button>
                {/* {data.status != 0 ?
                    <Button onClick={(e) => handleWarning(e)} variant='danger' size="sm" className="ml-1">DEACTIVE</Button>
                    : <Button onClick={(e) => handleWarning(e)} type='submit' size="sm" className="btn btn-success m;-1">ACTIVE</Button>
                } */}
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