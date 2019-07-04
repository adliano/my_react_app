import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  /**
   * onChangeListener() 
   * Method to handle event from any changes on 
   * Input field
   */
  onChangeListener = (event) => {
    // Destructuring and getting the value and name
    const { value, name } = event.target
    // Update the state    
    this.setState( { [name]: value})
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={this.onChangeListener}
          // Name attribute MUST match with the state key
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.onChangeListener}
          name="password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
