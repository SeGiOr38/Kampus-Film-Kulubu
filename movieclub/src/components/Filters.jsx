import React, { useState } from 'react';

const Filters = ({ dispatch }) => {
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [rating, setRating] = useState(0);

  const applyFilters = () => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { genre, language, rating },
    });
  };

  return (
    <div>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">Tür</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Komedi</option>
      </select>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Dil</option>
        <option value="English">İngilizce</option>
        <option value="Turkish">Türkçe</option>
      </select>
      <input
        type="number"
        placeholder="Min Puan"
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={applyFilters}>Filtrele</button>
    </div>
  );
};

export default Filters;