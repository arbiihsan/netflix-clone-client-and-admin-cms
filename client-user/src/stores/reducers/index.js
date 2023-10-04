import { combineReducers } from "redux";
import movieReducer from "./movie";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
    movie: movieReducer,
    movies: moviesReducer,
});

export default rootReducer;
