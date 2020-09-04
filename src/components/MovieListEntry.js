import React from 'react';


var MovieListEntry = (props) => { 
  // console.log('props within movie list entry:', props); // full obj
  return(
  <div className="movie-entry" >
    <div className="movie-title" >{props.movie.title}
    <button id="toggle-watched" className='movie-watched-button' onClick={(e) => {e.preventDefault(); props.watchHandler(props.movie.title)}}>Watched</button>
    </div>
  </div>
);}
 
export default MovieListEntry;