import React from 'react';
import './MovieDetails.css';

function MovieDetails(props) {
  const { year, rating, name, description } = props.movieToDisplay;

  return (
    <div className="movie-details">
      <p>-Movie Details Component-</p>
      <p>Name: {name}</p>
      <p>Desc: {description}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default MovieDetails;
