import { BASE_URL } from "../../config/api";

import {
    MOVIES_SUCCESS,
    GENRES_SUCCESS,
    MOVIES_LOADING,
    GENRES_LOADING,
    MOVIE_SUCCESS,
    GENRE_SUCCESS,
    MOVIE_LOADING,
    GENRE_LOADING,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    REGISTER_LOADING,
    LOGIN_LOADING,
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

export const fetchMovieByIdLoading = (payload) => {
    return {
        type: MOVIE_LOADING,
        payload,
    };
};

export const fetchMoviesLoading = (payload) => {
    return {
        type: MOVIES_LOADING,
        payload,
    };
};

export const fetchGenresSuccess = (payload) => {
    return {
        type: GENRES_SUCCESS,
        payload,
    };
};

export const fetchGenreByIdSuccess = (payload) => {
    return {
        type: GENRE_SUCCESS,
        payload,
    };
};

export const fetchGenresLoading = (payload) => {
    return {
        type: GENRES_LOADING,
        payload,
    };
};

export const fetchGenreByIdLoading = (payload) => {
    return {
        type: GENRE_LOADING,
        payload,
    };
};

export const fetchRegisterSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload,
    };
};

export const fetchLoginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};

export const fetchRegisterLoading = (payload) => {
    return {
        type: REGISTER_LOADING,
        payload,
    };
};

export const fetchLoginLoading = (payload) => {
    return {
        type: LOGIN_LOADING,
        payload,
    };
};

export function fetchMovies() {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMoviesLoading(true));
            // console.log(localStorage.access_token);
            const response = await fetch(`${BASE_URL}/movies`, {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            dispatch(fetchMoviesSuccess(responseJSON));

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchMoviesLoading(false));
        }
    };
}

export function addMovie(payload) {
    return async (dispatch, getState) => {
        try {
            if (!payload.title || !payload.synopsis) {
                throw new Error("Title and synopsis is required");
            }
            if (!(
                payload.Casts.every((cast) => cast?.name) && payload.Casts.length >= 3
              )) {
                throw new Error(
                    "Minimum total casts is 3"
                )
            }

            const response = await fetch(`${BASE_URL}/movies`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });

            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchMovies());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function deleteMovie(id) {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/movies/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });

            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchMovies());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function fetchGenres() {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchGenresLoading(true));
            const response = await fetch(`${BASE_URL}/genres`, {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response, '<<<<<<<<<');
            const responseJSON = await response.json();

            await dispatch(fetchGenresSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchGenresLoading(false));
        }
    };
}

export function addGenre(payload) {
    return async (dispatch, getState) => {
        try {
            if (!payload.name) {
                throw new Error("Name is required");
            }

            const response = await fetch(`${BASE_URL}/genres`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchGenres());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function deleteGenre(id) {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/genres/${+id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchGenres());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function editMovie(id, payload) {
    return async (dispatch, getState) => {
        try {
            if (!payload.title || !payload.synopsis) {
                throw new Error("Title and synopsis is required");
            }
            if (payload.rating < 1) {
                throw new Error("Minimum rating is 1");
            }
            // console.log(payload, '<<<<<');
            if (!(
                payload.Casts.every((cast) => cast?.name) && payload.Casts.length >= 3
              )) {
                throw new Error(
                    "Minimum total casts is 3"
                )
            }

            const response = await fetch(`${BASE_URL}/movies/${+id}`, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchMovies());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function editGenre(id, payload) {
    return async (dispatch, getState) => {
        try {
            if (!payload.name) {
                throw new Error("Name is required");
            }

            const response = await fetch(`${BASE_URL}/genres/${+id}`, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            await dispatch(fetchGenres());
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export function fetchMovieById(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMovieByIdLoading(true));
            const response = await fetch(`${BASE_URL}/movies/${+id}`, {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            dispatch(fetchMovieByIdSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchMovieByIdLoading(false));
        }
    };
}

export function fetchGenreById(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchGenreByIdLoading(true));
            const response = await fetch(`${BASE_URL}/genres/${+id}`, {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });
            // console.log(response);
            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            dispatch(fetchGenreByIdSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchGenreByIdLoading(false));
        }
    };
}

export function register(payload) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchRegisterLoading(true));
            if (!payload.email || !payload.password) {
                throw new Error("Both email and password is required");
            }
            // console.log(payload, '<<<<<<<<');
            const response = await fetch(`${BASE_URL}/register`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });

            const responseJSON = await response.json();
            // console.log(responseJSON);
            if (!response.ok) throw responseJSON.message;

            return dispatch(fetchRegisterSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchRegisterLoading(false));
        }
    };
}

export function login(form) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchLoginLoading(true));

            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const responseJSON = await response.json();

            if (!response.ok) throw responseJSON.message;

            localStorage.setItem("access_token", responseJSON.access_token);

            return dispatch(fetchLoginSuccess(responseJSON));
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            dispatch(fetchLoginLoading(false));
        }
    };
}