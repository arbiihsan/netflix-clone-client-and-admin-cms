import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormMovie from "../components/FormMovie";
import { addMovie } from "../stores/actions/actionCreator";
import { toast } from "react-toastify";


const AddMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (form) => {
    try {
      await dispatch(addMovie(form))
      navigate("/");
      toast.success(`Successfully added movie '${form.title}'`
      );
    } catch (err) {
      console.log(err, '<<<<<<<<');
      toast.error(Array.isArray(err) ? err[0] : err.message)
    }
  };

  return (
    <>
      <FormMovie handleSubmit={handleSubmit} />
    </>
  )
}

export default AddMovie