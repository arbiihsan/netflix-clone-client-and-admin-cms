import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormGenre from "../components/FormGenre";
import { addGenre } from "../stores/actions/actionCreator";
import { toast } from "react-toastify";


const AddGenre = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (form) => {
        try {
            await dispatch(addGenre(form))
            navigate("/genres");
            toast.success(`Successfully added genre '${form.name}'`)
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <>
            <FormGenre handleSubmit={handleSubmit} />
        </>
    )
}

export default AddGenre