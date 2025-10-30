import React from 'react';

const SearchBox = ({ dispatch }) => {
  const handleSearch = (e) => {
    dispatch({ type: 'SET_QUERY', payload: e.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Dizi ara..."
      onChange={handleSearch}
      style={{ padding: '10px', width: '100%' }}
    />
  );
};

export default SearchBox;
``