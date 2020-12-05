import React from 'react';
import './MoviesList.css';

import Movie from './Movie';

class MoviesList extends React.Component {
  render() {
    let mappedMovies = this.props.movies.map((value, index) => {
      return (
        <div>
          <Movie
            key={index}
            movie={value}
            handleChangeIndex={this.props.handleSetIndex}
            index={index}
          />
          {/* <button onClick={() => this.props.handleSetIndex(index)}>Load</button> */}
        </div>
      );
    });
    return (
      <div className="movies-list">
        <p>Movies List Component</p>
        {mappedMovies}
      </div>
    );
  }
}

// const MoviesList = (props) => {
//   return (
//     <div className="movies-list">
//       <p>Movies List Component</p>
//       <Movie />
//     </div>
//   )
// };

export default MoviesList;
