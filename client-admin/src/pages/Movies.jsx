import { BASE_URL } from "../config/api"
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, deleteMovie } from "../stores/actions/actionCreator";
import Swal from "sweetalert2";
import Spinner from 'react-bootstrap/Spinner';
import useFetch from "../hooks/useFetch"
import TableRow from "../components/TableRow"
import Table from "../components/Table";
import MoonLoader from "react-spinners/MoonLoader";
import ClipLoader from "react-spinners/ClipLoader";
import ReactSpinner from "../components/ReactSpinner";

const Movies = () => {
    const { movies, moviesLoading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const movieColumns = [
        "#",
        "Title",
        "Genre",
        "Rating",
        "Created At",
        "Updated At",
        "Details",
        "Action"
    ]

    if (moviesLoading) {
        return (
            <ReactSpinner />
            // <ClipLoader
            //     color={'#d63636'}
            //     loading={moviesLoading}
            //     size={100}
            // />
        )
    }

    const onDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteMovie(+id));
                Swal.fire(
                    'Deleted!',
                    'Movie has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            <Outlet />
            <div className="table-container">
                <div className="section-header">
                    <h2 >Movie List</h2>
                    <Link to="/movies/add-movie">
                        <button className="add-button">
                            <span>Add Movie</span>
                        </button>
                    </Link>
                </div>
                <Table datas={movies} deleteData={onDelete} type={{ name: "movies" }} columns={movieColumns} />
            </div>
        </>
    )
}

export default Movies