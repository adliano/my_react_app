import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// This is a simple form with Email and Passwd input
// Author: Adriano Alves
// Date:Jun 29 2019

function FormsComp () {
   return (
      <Card className='m-2'>
      <Card.Header>
         <h3>Login</h3>
      </Card.Header>
      <Form className='m-3'> 
        <Form.Group controlId='basicEmail'>
           <Form.Label>Email Address:</Form.Label>
           <Form.Control type='email' placeHolder='Enter Email'/>
           <Form.Text cassName='text-mute'>
           Some intructions here
           </Form.Text>
        </Form.Group>

        <Form.Group controlId='basicPasswd'>
           <Form.Label>Password:</Form.Label>
           <Form.Control type='password' placeHolder='Password'/>
        </Form.Group>
        <Button variant='secondary' type='submit'>
           Submit
        </Button>
      </Form>
      </Card>
   )
}

export default FormsComp 
