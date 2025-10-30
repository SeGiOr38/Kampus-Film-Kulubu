import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { tvReducer, initialState } from '../reducers/tvReducer';
import SearchBox from '../components/SearchBox';
import Filters from '../components/Filters';
import TVList from '../components/TVList';
import WatchlistPanel from '../components/WatchListPanel.jsx';
import Pagination from '../components/Pagination';

const Home = () => {
  const [state, dispatch] = useReducer(tvReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${state.query}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };
    fetchData();
  }, [state.query]);

  return (
    <div>
      <SearchBox dispatch={dispatch} />
      <Filters dispatch={dispatch} />
      {state.loading && <p>Yükleniyor...</p>}
      {state.error && <p>Hata: {state.error}</p>}
      {state.shows.length === 0 && !state.loading && <p>Sonuç bulunamadı.</p>}
      <TVList
        shows={state.shows}
        dispatch={dispatch}
        filters={state.filters}
        page={state.page}
        pageSize={state.pageSize}
      />
      <Pagination
        totalItems={state.shows.length}
        pageSize={state.pageSize}
        currentPage={state.page}
        dispatch={dispatch}
      />
      <WatchlistPanel watchlist={state.watchlist} dispatch={dispatch} />
    </div>
  );
};

export default Home;