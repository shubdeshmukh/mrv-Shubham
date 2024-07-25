// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');

  // Update the search term and call the callback function
  const handleChange = (event) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
    onSearchTermChange(newTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search for products..."
      />
    </div>
  );
};

export default SearchBar;
