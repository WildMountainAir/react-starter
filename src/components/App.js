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
  }

  componentDidMount() {
    this.setState({displayedMovies:this.state.movies});
  }

  // pass the info 
  searchHandler(string) {
    // i: string
    // action: use input string, filter through movies with input
    // ec: casing
    console.log('unfiltered movies in searchHandler', this.state.movies);
    console.log('string input', string);
    var inputStr = string.toLowerCase();
    console.log('lowercase input', inputStr)
    var moviesUnfiltered = this.state.movies;
    var filteredMovies = this.state.movies.filter( (string) => {
      var allFiltered = [];
      for (var i = 0; i < moviesUnfiltered.length; i++) {
        var currentMovie = moviesUnfiltered[i].title.toLowerCase();
        if (currentMovie.includes(inputStr)) {
          allFiltered.push(moviesUnfiltered[i].title);
        } else {
          this.setState({displayedMovies:this.state.movies});
        }
      }
      return allFiltered;
    });
    this.setState({displayedMovies:filteredMovies})
  }

  render(){
    console.log('displayed movies in render', this.state.displayedMovies)
    return(
    <div>
      <nav className="main-nav"></nav>
      <div>
        <h2><Search searchHandler={this.searchHandler}/></h2>
      </div>
      <div> 
        <h2><MovieList movies={this.state.displayedMovies}/></h2>
      </div>
    </div>
  )}
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
