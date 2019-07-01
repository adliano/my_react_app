import React from "react";

class Counter extends React.Component {
  // Save state
  state = {
    count: 0
  };

  // Button Event Handler
  handleIncrement = (event) => {
    console.log(event.target.innerHTML);
    // event has many information about element that sent the event so we can
    // Get Button innerHTML and use it to know witch button was pressed
    if (event.target.innerHTML === 'Increment'){
      this.setState({ count: this.state.count + 1 });
    } else { // Decrement
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary m-2" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn btn-danger m-2" onClick={this.handleIncrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
