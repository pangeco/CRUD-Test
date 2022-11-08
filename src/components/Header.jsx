import React, { useState } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { BsHouseDoorFill , BsPlus } from "react-icons/bs";

const Header = () => {
    const [actived, setActived] = useState();

    const handleActived = () => {

    }
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='border-bottom' sticky="top">
        <Container>
            <Navbar.Brand href="/">CRUD Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/">
                        {/* <BsHouseDoorFill /> */}
                        Home
                    </Nav.Link>
                    <Nav.Link href="/insert">
                        {/* <BsPlus /> */}
                        Insert
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