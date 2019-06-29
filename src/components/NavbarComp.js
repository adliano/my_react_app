import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'


function NavbarComp () {
    return (
        <Navbar bg='dark' variant='dark' expand="sm">
            <Navbar.Brand href="/">Alves</Navbar.Brand>
            {/* Toggle will be show on small view */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            {/* Navbar Collapse, all elements inside will collapse for small view */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    {/* Links used on navbar */}
                    <Nav.Link href='https://github.com/adliano'>
                        <Badge variant="light">Github</Badge>
                    </Nav.Link>
                    <Nav.Link href='http://www.alves.tech'>
                        <Badge variant="light">alves.tech</Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp