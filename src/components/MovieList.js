import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, i) => (<MovieListEntry movie={movie} key={i}/>))}
  </div>
)

export default MovieList;