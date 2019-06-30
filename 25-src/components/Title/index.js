import React from "react";
import Navbar from 'react-bootstrap/Navbar'

import "./style.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
