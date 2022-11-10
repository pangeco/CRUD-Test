import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { BsHouseDoorFill , BsPlus } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
  return (
    <Navbar bg="primary" variant='dark' expand="lg" className='border-bottom' sticky="top">
        <Container>
            <Navbar.Brand href="/">CRUD Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary'/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav activeKey={location.pathname}>
                    <Nav.Link href="/" className='rounded-2 mx-1'>
                        {/* <BsHouseDoorFill /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-coffee"/> */}
                        HOME
                    </Nav.Link>
                    <Nav.Link href="/insert" className='rounded-2 mx-1'>
                        {/* <BsPlus /> */}
                        INSERT
                    </Nav.Link>
                    {/* <Nav.Link href="/login">
                        Login
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header