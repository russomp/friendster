import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return (
    <input 
      type="search" 
      placeholder="Search friends" 
      onChange={props.onInputChange}
    />
  );
}

export default SearchBox;