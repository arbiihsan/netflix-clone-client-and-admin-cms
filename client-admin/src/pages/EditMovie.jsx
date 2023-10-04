import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editMovie, fetchMovieById } from "../stores/actions/actionCreator";
import { toast } from "react-toastify";
import FormMovie from "../components/FormMovie";
import ReactSpinner from "../components/ReactSpinner";


const EditMovie = () => {
    const { movie, movieLoading } = useSelector((state) => state.movie);
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieById(+id));
    }, [id]);

    const handleSubmit = async (form) => {
        try {
            await dispatch(editMovie(id, form))
            navigate("/")
            toast.success(`Successfully edited movie '${form.title}'`)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    if (movieLoading) {
        return (
            <ReactSpinner />
            // <ClipLoader
            //     color={'#d63636'}
            //     loading={moviesLoading}
            //     size={100}
            // />
        )
    }

    return (
        <>
            <FormMovie handleSubmit={handleSubmit} movieById={movie} />
        </>
    )
}

export default EditMovie