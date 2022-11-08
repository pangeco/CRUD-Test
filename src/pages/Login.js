import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/features/user/userSlice';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('text');

  const dispatch = useDispatch();

  const handleShowPassword = (event) => {
    if(event)
      setShowPassword(true);
    else
      setShowPassword(false);
  }

  useEffect(() => {
    if(showPassword)
      setPasswordType('text');
    else
      setPasswordType('password');
  }, [showPassword])
  

  const onSubmit = (data) => {
    // dispatch(setUser(data))
  }


  return (
    <Container fluid className='d-flex justify-content-center'>
    <div className='border rounded-3 p-2 m-2 shadow-lg'>
        <p className='text-center fw-bold'>LOGIN</p>
      <Form onSubmit={() => handleSubmit(onSubmit)}>
        <Form.Group className='my-1'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder='Username' required 
          {...register("username")}
          />
        </Form.Group>
        <Form.Group className='my-1'>
          <Form.Label>Password</Form.Label>
          <Form.Control type={passwordType} placeholder='Password' 
          required
          {...register("password")}
          />
          <div className='d-flex my-2'>
            <Form.Check value={showPassword} onChange={e => handleShowPassword(e.target.checked)}/>
            <Form.Text className='mx-2'>Show Password</Form.Text>
          </div>

        </Form.Group>
        <div className='d-flex'>
          <Button className='flex-fill' variant='success' type="submit" onSubmit={() => handleSubmit(onSubmit)}>Enter</Button>
        </div>
      </Form>
    </div>
    </Container>
  )
}

export default Login