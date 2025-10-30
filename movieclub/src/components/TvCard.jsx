import React from 'react';
import { Link } from 'react-router-dom';

const TVCard = ({ show, dispatch }) => {
  const { id, name, image, genres, language, rating, summary } = show.show;

  <button>
  <i className="fas fa-plus-circle"></i> Kısa Listeye Ekle
</button>
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img src={image?.medium} alt={name} />
      <h3>{name}</h3>
      <p>{genres.join(', ')} | {language}</p>
      <p>Puan: {rating?.average || 'N/A'}</p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <Link to={`/detail/${id}`}>Detay</Link>
      <button onClick={() => dispatch({ type: 'ADD_WATCHLIST', payload: show.show })}>
        Kısa Listeye Ekle
      </button>
    </div>
  );
};

export default TVCard;