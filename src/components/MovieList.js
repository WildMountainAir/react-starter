import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map(movie => (<MovieListEntry movie={movie}/>))}
  </div>
)

export default MovieList;