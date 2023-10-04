import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../stores/actions/actionCreator";

const FormGenre = ({ handleSubmit, genreById }) => {
    const defaultValue = {
        name: genreById?.name || "",
        createdAt: new Date(),
        updatedAt: new Date()
    };

    const [form, setForm] = useState({ ...defaultValue })

    useEffect(() => {
        setForm(defaultValue)
    }, [genreById]);

    const handleChange = (e) => {
        const { name, value } = e?.target
        // console.log(name, value);
        setForm({ ...form, [name]: value });
    };

    const handleAddGenre = (e) => {
        e.preventDefault();

        handleSubmit(form, () => setForm(defaultValue));
    }

    return (
        <div className="form-movie-container">
            <div className="form-movie-container-2">
                <form onSubmit={handleAddGenre} className="lodging-form">
                    <div>
                        <h2>{genreById ? "Edit" : "Add"} Genre</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addGenre-name-synopsis" className="form-label">Genre Name <span className="required">*</span></label>
                        <input value={form.name} type="text" name="name" placeholder="name" id="addGenre-name"
                            onChange={handleChange} required className="form-input" />
                    </div>

                    <div className="form-button-group">
                        <Link to="/genres">
                            <button className="form-cancel-link">Cancel</button>
                        </Link>
                        <button className="form-submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormGenre