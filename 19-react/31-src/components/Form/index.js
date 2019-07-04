import React, { Component } from 'react'
import './style.css'

class Form extends Component {
  // Setting the component's initial state
  // 1) Set the initial value of this.state.password to an empty string.
  state = {
    firstName: '',
    lastName: '',
    passwd: ''
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value
    const name = event.target.name
    // 3) Do not allow the user to type in a password that is longer than 15 characters.
    // i.e. the length of the password state should never go beyond 15 characters.
    if (name === 'passwd') value = value.substring(0, 15)

    // Updating the input's state
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault()
    //
    let _outputString
    // 2-1) If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!".
    //  Check if all fields has data
    if (!this.state.firstName && !this.state.lastName) {
      _outputString = 'Fill out your first, last name please!'
    }
    // 2-2) If the user has provided a first and last name,
    // but their password is less than 6 characters,
    // throw an alert saying, "Choose a more secure password,"
    // followed by the full name. E.g. "Choose a more secure password, John Smith!"
    else if (this.state.passwd.length < 6) {
      _outputString = `Choose a more secure password, ${this.state.firstName} ${this.state.lastName}!`
    } else {
      _outputString = `Hello ${this.state.firstName} ${this.state.lastName} your passwd is ${this.state.passwd.length} character long`
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    alert(_outputString)

    this.setState({
      firstName: '',
      lastName: '',
      passwd: ''
    })
  }

  render () {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className='container bg-light m-5 p-5'>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className='form'>
          <input
            className='my-3'
            value={this.state.firstName}
            name='firstName'
            onChange={this.handleInputChange}
            type='text'
            placeholder='First Name'
          />
          <input
            className='my-3'
            value={this.state.lastName}
            name='lastName'
            onChange={this.handleInputChange}
            type='text'
            placeholder='Last Name'
          />
          {/* 1) A new input field that updates this.state.password. */}
          <input
            className='my-3'
            value={this.state.passwd}
            name='passwd'
            onChange={this.handleInputChange}
            type='password'
            placeholder='Password'
          />
          <button className='btn btn-primary w-25 mt-4' onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
