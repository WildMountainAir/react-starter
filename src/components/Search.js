import React from 'react';
import ReactDOM from 'react-dom';

var Search = (props) => (
  <div className="search">
    <input id="formInput" className="controlled-form search-form" type="text" maxLength="25" placeholder="What movie are you looking for?"/>
    <button className='submit-button' onClick={(e) => {e.preventDefault(); props.searchHandler(document.getElementById('formInput').value)}}>
      Search
    </button>
  </div>
)

export default Search;