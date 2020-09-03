import React from 'react';
import ReactDOM from 'react-dom';

var Search = (props) => (
  <div className="search">
    <input id="formInput" className="controlled-form search-form" type="text" maxLength="25" placeholder="Search For or Add A Movie"/>
    <button className='submit-button' onClick={(e) => {e.preventDefault(); props.searchHandler(document.getElementById('formInput').value)}}>
      Search
    </button>
    <button className='add-button' onClick={(e) => {e.preventDefault(); props.addHandler(document.getElementById('formInput').value)}}>
      Add
    </button>
  </div>
)

export default Search;