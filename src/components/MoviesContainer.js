import React, { Component } from 'react';
import './MoviesContainer.css';

import MovieDetais from './MovieDetails';
import MoviesList from './MoviesList';

import data from '../data.json';

class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: [...data],
      index: 0,
    };
    this.handleSetIndex = this.handleSetIndex.bind(this)
  }

  handleSetIndex(index) {
    this.setState({
      index: index,
    });
  }

  render() {
    const { movies, index } = this.state;
    return (
      <div className="movies-container">
        <p>MoviesContainer Component</p>
        <MovieDetais movieToDisplay={movies[index]} />
        <MoviesList movies={movies} handleSetIndex={this.handleSetIndex} />
      </div>
    );
  }
}
export default MoviesContainer;
