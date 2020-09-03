import React from 'react';
import ReactDOM from 'react-dom';

var Search = () => (
  <div className="search">
    <input className="controlled-form search-form" type="text" maxlength="25" placeholder="What movie are you looking for?"/>
    <button className='submit-button'>
      Search
    </button>
  </div>
)

export default Search;