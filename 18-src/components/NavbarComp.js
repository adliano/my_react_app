import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function NavbarComp () {
  return (
    <Navbar variant='dark' bg='primary'>
        <Navbar.Brand href='/'>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <a href='#login'>Adriano</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavbarComp
