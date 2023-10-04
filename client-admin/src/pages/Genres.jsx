import { BASE_URL } from "../config/api"
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { deleteGenre, fetchGenres } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Spinner from 'react-bootstrap/Spinner';
import useFetch from "../hooks/useFetch"
import Table from "../components/Table";
import ReactSpinner from "../components/ReactSpinner";


const Genres = () => {
    const { genres, genresLoading } = useSelector((state) => state.genre);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    if (genresLoading) {
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
                dispatch(deleteGenre(+id));
                Swal.fire(
                    'Deleted!',
                    'Genre has been deleted.',
                    'success'
                )
            }
        })
    }

    const genreColumns = [
        "#",
        "Genre Name",
        "Created At",
        "Updated At",
        "Action"
    ]

    return (
        <>
            <Outlet />
            <div className="table-container">
                <div className="section-header">
                    <h2 >Genre List</h2>
                    <Link to="/genres/add-genre ">
                        <button className="add-button">
                            <span>Add Genre</span>
                        </button>
                    </Link>
                </div>
                <Table datas={genres} deleteData={onDelete} type={{ name: "genres" }} columns={genreColumns} />
            </div>
        </>
    )
}

export default Genres