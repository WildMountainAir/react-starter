import React from 'react';

import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
  <div className="movie-list">
  <button className="unwatched-button" onClick={(e) => {e.preventDefault(); props.displayUnwatched()}}>Unwatched</button>
  <button className="watched-button" onClick={(e) => {e.preventDefault(); props.displayWatched()}}>Watched</button>
  <button className="all-button" onClick={(e) => {e.preventDefault(); props.displayAll()}}>All</button>
    {props.movies.map((movie, i) => (<MovieListEntry watchHandler={props.watchHandler} movie={movie} key={i} />))}
  </div>
)

export default MovieList;