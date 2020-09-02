import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = (props) => {
  return (
    <div className="movie-entry" >
      <div className="movie-title">{props.movie}</div>
    </div>
  );
};
 
export default MovieListEntry;