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
      ]
    }
  }

  render(){
    return(
    <div>
      <nav className="main-nav"></nav>
      <div>
        <h2><Search /></h2>
      </div>
      <div> 
        <h2><MovieList movies={this.state.movies} /></h2>
      </div>
    </div>
  )}
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
