import {
  GENRES_SUCCESS,
  GENRE_SUCCESS,
  GENRES_LOADING,
  GENRE_LOADING,
} from "../actions/actionType";

const initialState = {
  genre: {},
  genres: [],
  genresLoading: false,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case GENRE_SUCCESS:
      return {
        ...state,
        genre: action.payload,
      }; 
    case GENRES_LOADING:
      return {
        ...state,
        genresLoading: action.payload,
      };
    case GENRE_LOADING:
      return {
        ...state,
        genreLoading: action.payload,
      };
    default:
      return state;
  }
};

export default genreReducer;
