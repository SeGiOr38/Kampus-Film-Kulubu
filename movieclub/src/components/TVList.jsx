import React from 'react';
import TVCard from './TvCard.jsx';

const TVList = ({ shows, dispatch, filters, page, pageSize }) => {
  const filteredShows = shows
    .filter(item => {
      const { genres, language, rating } = item.show;
      const genreMatch = filters.genre ? genres.includes(filters.genre) : true;
      const languageMatch = filters.language ? language === filters.language : true;
      const ratingMatch = filters.rating ? (rating?.average || 0) >= filters.rating : true;
      return genreMatch && languageMatch && ratingMatch;
    });

  const startIndex = (page - 1) * pageSize;
  const paginatedShows = filteredShows.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {paginatedShows.map(show => (
        <TVCard key={show.show.id} show={show} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TVList;