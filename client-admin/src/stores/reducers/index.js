import { combineReducers } from "redux";
import movieReducer from "./movie";
import genreReducer from "./genre";
import userReducer from "./user";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    user: userReducer,
});

export default rootReducer;
