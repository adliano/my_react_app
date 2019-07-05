// https://reactjs.org/docs/conditional-rendering.html
import React, { Component } from 'react'
import NavTabs from './NavTabs'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

class PortfolioContainer extends Component {
  /**
   * State
   */
  state = {
    currentPage: 'Home'
  }
  /**
   * onPageChange()
   * Method to handle event from NavTabs
   * page will be a String passed to this method at NavTabs.js
   * `onClick={() => props.handlePageChange("Home")`
   * So this String will be set to state
   */
  handlePageChange = page => {
    this.setState({ currentPage: page })
  }
  /**
   * renderSelectedPage()
   * This Method will render the appropriate component
   * based on `this.state.currentPage`
   */
  renderSelectedPage = () => {
    switch (this.state.currentPage) {
      case 'About':
        return (<About />)
        // break;
      case 'Blog':
        return (<Blog />)
        // break;
      case 'Contact':
        return (<Contact />)
        // break;
      default:
        return (<Home />)
        // break;
    }
  }
  /**
   * Render()
   */
  render () {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderSelectedPage()}
      </div>
    )
  }
}

export default PortfolioContainer

/*
********** Notes **********
Navigate to localhost:3000 in your web browser and take a moment to study the rendered application.

At the top of the page there's a Bootstrap NavTabs component. Whenever a nav element is clicked,
the nav element goes into an "active" state. Whenever a nav item is clicked,
it sets this.state.currentPage inside of PortfolioContainer to the selected navigation item.

Now add code to PortfolioContainer so that depending on the currently selected page,
a different component is rendered underneath the NavTabs component. Example:

Render the About component when this.state.currentPage === "About"

Render the Blog component when this.state.currentPage === "Blog"

Render the Contact component when this.state.currentPage === "Contact"

Render the Home component when this.state.currentPage === "Home"

Bonus

Inside of src/components/NavTabs.js, add code so that the a tag for 
the currentPage has the "active" class. This component receives the currentPage via props.
*/
