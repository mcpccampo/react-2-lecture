import React from 'react';
import './movie.css';

function Movie(props) {
  return (
    <div className="movie">
      Movie name: {props.movie.name}
      <br />
      <button onClick={()=>{ props.handleChangeIndex(props.index) }}>See Details</button>
    </div>
  );
}

export default Movie;
