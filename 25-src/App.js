import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from './components/FriendCard'
// Import Data
import data from './friends.json'

function App() {
  console.log(data);

  let _friends = data.map((element) => {
    // Destructing JSON
    let { name, image, occupation, location } = element
    return (
      <FriendCard name={name} image={image} occupation={occupation} location={location}/>
    )
  })
  
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {_friends}
    </Wrapper>
  );
}

export default App;
