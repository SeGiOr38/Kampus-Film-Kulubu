import React from 'react';

const Pagination = ({ totalItems, pageSize, currentPage, dispatch }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_PAGE', payload: 1 })} disabled={currentPage === 1}>
        İlk
      </button>
      <button onClick={() => dispatch({ type: 'SET_PAGE', payload: currentPage - 1 })} disabled={currentPage === 1}>
        Geri
      </button>
      <span>Sayfa {currentPage} / {totalPages}</span>
      <button onClick={() => dispatch({ type: 'SET_PAGE', payload: currentPage + 1 })} disabled={currentPage === totalPages}>
        İleri
      </button>
      <button onClick={() => dispatch({ type: 'SET_PAGE', payload: totalPages })} disabled={currentPage === totalPages}>
        Son
      </button>
    </div>
  );
};

export default Pagination;