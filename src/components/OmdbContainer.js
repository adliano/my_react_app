import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  /** State **/
  state = {
    result: {},
    search: ""
  };
  /**
   * @method searchMovies()
   * @param {String} query
   * Method used to search a movie
   */
  searchMovies = query => {
    API.search(query)
      .then(res => res.json())
      .then(data => this.setState({ result: data }))
      .catch(err => console.log(err));
  };
  /**
   * React Livecircle
   * componentDidMount()
   */
  componentDidMount = () => {
    this.searchMovies('The Matrix')
  }
  /**
   * Render Component
   */
  render() {
    return (
      <Container >
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
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
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
