import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.js';
import Search from './Search.js';
// import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Frozen'},
        {title: 'Moana'},
        {title: 'Bambi'},
        {title: 'Sleeping Beauty'},
        {title: 'Beauty and the Beast'}
      ],
      displayedMovies: []
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  componentDidMount() {
    this.setState({displayedMovies:this.state.movies});
  }

  // pass the info 
  searchHandler(string) {
    // i: string
    // action: use input string, filter through movies with input
    // ec: casing
    // console.log('unfiltered movies in searchHandler', this.state.movies);
    // console.log('string input', string);
    var noMovie = [{title: '🙈 Oops! No Results Found'}]
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
        <h2><MovieList movies={this.state.displayedMovies}/></h2>
      </div>
    </div>
  )}
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
