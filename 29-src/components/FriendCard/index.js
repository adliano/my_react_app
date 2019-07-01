import React from 'react'
import './style.css'

class FriendCard extends React.Component {
  /*
  ********** Delete Event Handler ***********
  */
 deleteEventHandler = (event) => {
  event.preventDefault()
  // Get parent of the x button and set display to none
  // This will make the card disaper but will not remove from Array
  event.target.parentElement.style.display = 'none'   
 }
 /**
  * ************* Render **************
  */
  render () {
    // Destructing to make my life easier
    // https://reactjs.org/docs/components-and-props.html
    // If destructing not use we need to use something like : `this.props.location`
    // for each attribute
    const { name, image, occupation, location } = this.props
    //Returning
    return (
      <div className='card'>
        <div className='img-container'>
          <img alt={name} src={image} />
        </div>
        <div className='content'>
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Occupation:</strong> {occupation}
            </li>
            <li>
              <strong>Address:</strong> {location}
            </li>
          </ul>
        </div>
        <span className="remove" onClick={this.deleteEventHandler}>𝘅</span>
      </div>
    )
  }
}

export default FriendCard
/*
function FriendCard(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={this.deleteEventHandler}>𝘅</span>
    </div>
  );
}
*/
