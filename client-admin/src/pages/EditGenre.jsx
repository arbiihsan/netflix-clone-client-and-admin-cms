import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editGenre, fetchGenreById } from "../stores/actions/actionCreator"
import { toast } from "react-toastify";
import FormGenre from "../components/FormGenre"
import ReactSpinner from "../components/ReactSpinner";

const EditGenre = () => {
    const { genre, genreLoading } = useSelector((state) => state.genre)
    const { id } = useParams()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenreById(+id));
    }, [id]);

    const handleSubmit = async (form) => {
        try {
            await dispatch(editGenre(id, form))
            navigate("/genres")
            toast.success(`Successfully edited genre '${form.title}'`)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }

    if (genreLoading) {
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
            <FormGenre handleSubmit={handleSubmit} genreById={genre} />
        </>
    )
}

export default EditGenre