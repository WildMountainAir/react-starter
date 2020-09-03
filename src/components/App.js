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
    }
  }

  // method that will take in form input & update searchValue state to form value
  //  clear form on submit? or change to "search results for: {form value}"
  //  if value is found
  //    update searchValue state to value from form
  //    (method?) clear movie list 
  //    (method?) update movie list with results that match search form value
  //  else if value doesn't return result?
  //    (method or just an alert?) alert message or gif

  render(){
    return(
    <div>
      <nav className="main-nav"></nav>
      <div>
        <h2><Search /></h2>
      </div>
      <div> 
        <h2><MovieList movies={this.state.movies}/></h2>
      </div>
    </div>
  )}
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
