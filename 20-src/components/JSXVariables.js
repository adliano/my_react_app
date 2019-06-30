import React from "react";

function JSXVariables() {
  let myname = 'Adriano'
  let about = 'nice way to build something'

  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {myname.toUpperCase()}</h1>
          <h2>My name has {myname.length} letters</h2>
          <h2>I think React {about}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
