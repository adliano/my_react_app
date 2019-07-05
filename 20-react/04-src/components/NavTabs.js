import React, { Component } from "react";

class NavTabs extends Component {
  setClassName (page) {
    return (
      (this.props.currentPage === page ) ? 'nav-link active' : 'nav-link'
    )
  }
  /**
   * Return
   */
  render() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => this.props.handlePageChange("Home")} className={this.setClassName("Home")}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => this.props.handlePageChange("About")} className={this.setClassName("About")}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => this.props.handlePageChange("Blog")} className={this.setClassName("Blog")}>
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => this.props.handlePageChange("Contact")} className={this.setClassName("Contact")}>
          Contact
        </a>
      </li>
    </ul>
  )
  }
}

export default NavTabs;
