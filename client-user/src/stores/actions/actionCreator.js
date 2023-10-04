import { BASE_URL } from "../../config/api";

import {
    MOVIES_SUCCESS,
    MOVIES_LOADING,
    MOVIE_SUCCESS,
    MOVIE_LOADING,
} from "./actionType";

export const fetchMoviesSuccess = (payload) => {
    return {
        type: MOVIES_SUCCESS,
        payload,
    };
};

export const fetchMovieByIdSuccess = (payload) => {
    return {
        type: MOVIE_SUCCESS,
        payload,
    };
};

export const fetchMoviesLoading = (payload) => {
    return {
        type: MOVIES_LOADING,
        payload,
    };
};

export const fetchMovieByIdLoading = (payload) => {
    return {
        type: MOVIE_LOADING,
        payload,
    };
};

export function fetchMovies() {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMoviesLoading(true));

            const response = await fetch(`${BASE_URL}/users/movies`);
            
            const responseJSON = await response.json();
            // console.log(responseJSON);
            if (!response.ok) throw responseJSON.message;

            return dispatch(fetchMoviesSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchMoviesLoading(false));
        }
    };
}

export function fetchMovieById(slug) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMovieByIdLoading(true));

            const response = await fetch(`${BASE_URL}/users/movies/${slug}`);

            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            return dispatch(fetchMovieByIdSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchMovieByIdLoading(false));
        }
    };
}