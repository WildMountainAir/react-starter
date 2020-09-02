import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = ({movie}) => { 
  // console.log('props within movie list entry:', props); // full obj
  return(
  <div className="movie-entry" >
    <div className="movie-title">{movie.title}</div>
  </div>
);}
 
export default MovieListEntry;