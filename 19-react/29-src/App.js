import React from 'react'
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper'
import friends from './friends.json'
import './App.css'

// ** Instructions **
// 1) Refactor the App component so that it's a class component.
// Set the component's initial state to the friends JSON array.
// Inside of the render method, map over this.state.friends to
// render each FriendCard component.
// ⚠️ To see the difference compare with the OLD CODE by the end of this file ⚠️

class App extends React.Component {
  /** **** STATE ******/
  state = {
    data: {}
  }

  /* ======== componentDidMount ======== */
  componentDidMount () {
    this.setState({ data: friends })
  }

  /** ********* Delete Event Handler ***********/
  deleteEventHandler = event => {
    event.preventDefault()
    // Get parent of the x button and set display to none
    // This will make the card disaper but will not remove from Array
    event.target.parentElement.style.display = 'none'
  }

  /** Load Friends **/
  // 2) Refactor the App component so that rather than rendering each FriendCard component manually,
  // use a map to render one FriendCard component for each object in the friends JSON, passing in the appropriate props.
  // Use map method to get each element of friends and generate a card for it
  renderFriends = () => {
    return friends.map((element) => {
      // Destructing
      const { id, name, image, occupation, location } = element
      // Reurn
      return (
        <FriendCard
          key={id}
          name={name}
          image={image}
          occupation={occupation}
          location={location}
          onDeletePress={this.deleteEventHandler}
        />
      )
    })
  }

  /** ********* Render ************/
  render () {
    return (
      <Wrapper>
        <h1 className='title'>Friends List</h1>
        {this.renderFriends()}
      </Wrapper>
    )
  }
}

export default App


// ********************************************************************
// ************************* OLD CODE *********************************
// ********************************************************************
// function App() {
//   return (
//     <Wrapper>
//       <h1 className="title">Friends List</h1>
//       <FriendCard
//         name={friends[0].name}
//         image={friends[0].image}
//         occupation={friends[0].occupation}
//         location={friends[0].location}
//       />
//       <FriendCard
//         name={friends[1].name}
//         image={friends[1].image}
//         occupation={friends[1].occupation}
//         location={friends[1].location}
//       />
//       <FriendCard
//         name={friends[2].name}
//         image={friends[2].image}
//         occupation={friends[2].occupation}
//         location={friends[2].location}
//       />
//     </Wrapper>
//   );
// }
