import React, { Component } from 'react'
import Container from './Container'
import Row from './Row'
import Col from './Col'
import Card from './Card'
import SearchForm from './SearchForm'
import MovieDetail from './MovieDetail'
import API from '../utils/API'

class OmdbContainer extends Component {
  /** State **/
  state = {
    result: {},
    search: ''
  }
  /**
   * @method searchMovies()
   * @param {String} query
   * Method used to search a movie
   */
  searchMovies = query => {
    API.search(query)
      .then(res => res.json())
      .then(data => this.setState({ result: data }))
      .catch(err => console.log(err))
  }
  /**
   * React Livecircle
   * componentDidMount()
   */
  componentDidMount = () => {
    this.searchMovies('The Matrix')
  }
  /**
   * onInputChange()
   * Method to handle onChange event for input(s)
   */
  onInputChange = event => {
    event.preventDefault()
    // Destructing event.target and get name, value
    const { name, value } = event.target
    // Update state
    this.setState({ [name]: value })
  }
  /**
   * onFormSubmit()
   * Method to handle event from Search button
   */
  onFormSubmit = (event) => {
    event.preventDefault()
    this.searchMovies(this.state.search)
  }
  /**
   * Render Component
   */
  render () {
    return (
      <Container>
        <Row>
          <Col size='md-8'>
            <Card
              heading={this.state.result.Title || 'Search for a Movie to Begin'}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size='md-4'>
            <Card heading='Search'>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.onInputChange}
                handleFormSubmit={this.onFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OmdbContainer
