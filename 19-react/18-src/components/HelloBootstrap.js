// Most Import React
import React from 'react'
// Import Bootstrap Components
import NavbarComp from './NavbarComp'
import JumbotronComp from './JumbotronComp'
import CardComp from './CardComp'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function HelloBootstrap () {
  return (
    <div>
      <NavbarComp />
      <JumbotronComp />
      <Container className='mt-3'>
        <CardComp header='First card'/>
        <CardComp header='Second card'/>
        <CardComp header='Thrid card'/>
        <CardComp header='Fourth card'/>
        <CardComp header='Five card'/>
        <CardComp header='Six card'/>
        <CardComp header='Seven card'/>
        <CardComp header='Eight card'/>
        <CardComp header='Nine card'/>
        <CardComp header='Ten card'/>
      </Container>
    </div>
  )
}

export default HelloBootstrap
