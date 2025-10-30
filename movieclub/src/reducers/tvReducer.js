export const initialState = {
  loading: false,
  error: null,
  shows: [],
  query: 'friends',
  filters: { genre: '', language: '', rating: 0 },
  watchlist: [],
  page: 1,
  pageSize: 6,
};

export function tvReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, shows: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'ADD_WATCHLIST':
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'REMOVE_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(show => show.id !== action.payload),
      };
    case 'CLEAR_WATCHLIST':
      return { ...state, watchlist: [] };
    default:
      return state;
  }
}