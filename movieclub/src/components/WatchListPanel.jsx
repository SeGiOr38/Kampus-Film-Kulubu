import React from 'react';

const WatchlistPanel = ({ watchlist, dispatch }) => {
    <button>
  <i className="fas fa-trash"></i> Tümünü Temizle
</button>
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>Gösterime Girecekler</h3>
      {watchlist.length === 0 ? (
        <p>Henüz seçili dizi yok.</p>
      ) : (
        watchlist.map(show => (
          <div key={show.id}>
            <span>{show.name}</span>
            <button onClick={() => dispatch({ type: 'REMOVE_WATCHLIST', payload: show.id })}>
              Kaldır
            </button>
          </div>
        ))
      )}
      <button onClick={() => dispatch({ type: 'CLEAR_WATCHLIST' })}>Tümünü Temizle</button>
    </div>
  );
};

export default WatchlistPanel;
