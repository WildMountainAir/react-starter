import React from 'react';

import MovieList from './MovieList.js';
import Search from './Search.js';
// import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayedMovies: [],
      watchedMovies: [],
      unwatchedMovies: []
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.watchHandler = this.watchHandler.bind(this);
    this.displayUnwatched = this.displayUnwatched.bind(this);
    this.displayWatched = this.displayWatched.bind(this);
    this.displayAll = this.displayAll.bind(this);
  }

  componentDidMount() {
    this.setState({displayedMovies:this.state.movies});
  }

  searchHandler(string) {
    // i: string
    // action: use input string, filter through movies with input
    // ec: casing
    // console.log('unfiltered movies in searchHandler', this.state.movies);
    // console.log('string input', string);
    var noMovie = [{title: '🙈 Oops! No Results Match Your Search.'}];
    var filteredMovies = this.state.movies.filter( (movie) => {
      var inputStr = string.toLowerCase();
      var currentTitle = movie.title.toLowerCase();
      return currentTitle.includes(inputStr);
    });
    if (filteredMovies.length > 0) {
      this.setState({displayedMovies:filteredMovies});
    } else {
      this.setState({displayedMovies:noMovie})
    }
  }

  addHandler(string) {
    // i: string
    // a: use input string to add a movie title to movies
    // hl: set state of movies to include added movie
    var lowerCase = string.toLowerCase();
    var splitString = lowerCase.split(' ');
    var newMovieTitle = '';
    for (var i = 0; i < splitString.length; i++) {
      var currentWord = splitString[i];
      currentWord = currentWord[0].toUpperCase() + currentWord.slice(1);
      newMovieTitle += currentWord + ' ';
    }
    var newMovie = {title: newMovieTitle};
    var movieList = [newMovie, ...this.state.displayedMovies];
    this.setState({displayedMovies:movieList, movies:movieList});
  }

  watchHandler(string) {
    // i: string - title of movie clicked
    // a: add watched movie to watched list, or add to unwatched
    // hl: move movie from unwatched list to watched & visa-versa

    var newWatched = {title: string};
    var movieListWatched = [newWatched, ...this.state.watchedMovies];
    var movieListUnwatched = this.state.unwatchedMovies;
    var filteredUnwatched = movieListUnwatched.filter( (movie) => {
      var inputStr = string.toLowerCase();
      var currentTitle = movie.title.toLowerCase();
      return !currentTitle.includes(inputStr);
    });
    this.setState({watchedMovies:movieListWatched, unwatchedMovies:filteredUnwatched});
  }

  displayUnwatched() {
    this.setState({displayedMovies:this.state.unwatchedMovies});
  }

  displayWatched() {
    this.setState({displayedMovies:this.state.watchedMovies});
  }

  displayAll() {
    this.setState({displayedMovies:this.state.movies});
  }

  render(){
    console.log('displayed movies in render', this.state.displayedMovies)
    return(
    <div>
      <nav className="main-nav"></nav>
      <div>
        <h2>< Search 
          searchHandler={this.searchHandler} 
          addHandler={this.addHandler} 
        /></h2>
      </div>
      <div> 
        <h2><MovieList 
        movies={this.state.displayedMovies} 
        watchHandler={this.watchHandler}
        displayUnwatched={this.displayUnwatched}
        displayWatched={this.displayWatched}
        displayAll={this.displayAll}
        /></h2>
      </div>
    </div>
  )}
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
