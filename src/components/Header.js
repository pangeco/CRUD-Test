import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { BsHouseDoorFill , BsPlus } from "react-icons/bs";

const Header = () => {
  return (
    // <nav>
    //     <ul>
    //         <li className='flex border-b bg-gray-300 p-2'>
    //             <NavLink to="/"  className='p-2 rounded-md mx-1 hover:bg-blue-600 hover:text-white'>Home</NavLink>
    //             <NavLink to="/insert" className='p-2 rounded-md mx-1 hover:bg-blue-600 hover:text-white'>Insert</NavLink>
    //         </li>
    //     </ul>
    // </nav>
    <Navbar bg="light" expand="lg" className='border-bottom' sticky="top">
        <Container>
            <Navbar.Brand href="/">CRUD Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto' as="ul" >
                    <Nav.Item as="li">
                        <Nav.Link href="/">
                            {/* <BsHouseDoorFill /> */}
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/insert" >
                            {/* <BsPlus /> */}
                            Insert
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/logout" className='align-self-end'>
                            {/* <BsPlus /> */}
                            Log Out
                        </Nav.Link>
                    </Nav.Item>    
                </Nav>
            </Navbar.Collapse>
        </Container>
        
    </Navbar>
  )
}

export default Header