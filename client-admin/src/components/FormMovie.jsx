import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../stores/actions/actionCreator";
import { toast } from "react-toastify";

const FormMovie = ({ handleSubmit, movieById }) => {
    const defaultValue = {
        title: movieById?.title || "",
        synopsis: movieById?.synopsis || "",
        trailerUrl: movieById?.trailerUrl || "",
        imgUrl: movieById?.imgUrl || "",
        rating: movieById?.rating || 0,
        genreId: movieById?.genreId || 0,
        Casts: movieById?.Casts || [
            { name: "", profilePict: "" },
            { name: "", profilePict: "" },
            { name: "", profilePict: "" },
        ]
    };

    const { genres } = useSelector((state) => state.genre);
    // console.log(genres);
    const [form, setForm] = useState({ ...defaultValue });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
        // console.log(genres, '<<<<<<<<<');
        setForm(defaultValue)
    }, [movieById]);

    const handleAddMovie = (e) => {
        e.preventDefault();
        // console.log(form, '<<<<');
        handleSubmit(form);
    };

    const handleChange = (e) => {
        const { name, value } = e?.target
        console.log(name, value, '<<<<<<<<<<<')
        setForm({ ...form, [name]: value });
    };

    const handleAddCastForm = () => {
        const addForm = { name: "", profilePict: "" };

        setForm({ ...form, Casts: [...form.Casts, addForm] });
    };

    const handleDeleteCastForm = (index) => {
        try {
            if (form?.Casts.length <= 3) {
                throw { name: "Minimum total cast is 3" };
            }

            const cast = [...form.Casts];
            // console.log(cast);
            cast.splice(index, 1);

            setForm({ ...form, Casts: cast });
        } catch (error) {
            console.log(error);
            toast.error(error.name)
        }
    };

    const handleAddCast = (index, event) => {
        const cast = [...form.Casts];
        // console.log(cast);
        cast[index][event.target.name] = event.target.value;

        setForm({ ...form, Casts: cast });
    };

    return (
        <div className="form-movie-container">
            <div className="form-movie-container-2">
                <form onSubmit={handleAddMovie} className="lodging-form">
                    <div>
                        <h2>{movieById ? "Edit" : "Add"} Movie</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addMovie-title" className="form-label">Title <span className="required">*</span></label>
                        <input value={form.title} type="text" name="title" placeholder="title" id="addMovie-title"
                            onChange={handleChange} required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="addMovie-synopsis" className="form-label">Synopsis <span className="required">*</span></label>
                        <input value={form.synopsis} type="text" name="synopsis" placeholder="synopsis" id="addMovie-synopsis"
                            onChange={handleChange} required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="addMovie-trailerUrl" className="form-label">Trailer Url <span className="required">*</span></label>
                        <input value={form.trailerUrl} type="text" name="trailerUrl" placeholder="trailerUrl" id="addMovie-trailerUrl"
                            onChange={handleChange} required className="form-input" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="addMovie-imgUrl" className="form-label">Image Url <span className="required">*</span></label>
                        <input value={form.imgUrl} type="text" name="imgUrl" placeholder="imgUrl" id="addMovie-imgUrl"
                            onChange={handleChange} required className="form-input" />
                    </div>

                    <div className="form-group-inner">
                        <div className="form-group-half">
                            <label htmlFor="addMovie-genre" className="form-label">Genre <span className="required">*</span></label>
                            <select className="form-select" name="genreId" value={form.genreId} onChange={(e) => handleChange(e)} required>
                                <option value="">--Select genre--</option>
                                {genres.map((genre) => (
                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group-half">
                            <label htmlFor="addMovie-rating" className="form-label">Rating <span className="required">*</span></label>
                            <input value={form.rating} type="number" name="rating" placeholder="rating" id="addMovie-rating"
                                onChange={handleChange} required className="form-input" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="addMovie-casts" className="form-label">Casts <span className="required">*</span></label>
                        {form.Casts.map((cast, index) => (
                            <div
                                key={index}
                                className="form-cast"
                            >
                                <div className="form-input-cast">
                                    <input
                                        type="text"
                                        name="name"
                                        value={cast?.name}
                                        onChange={(e) => handleAddCast(index, e)}
                                        placeholder="Cast Name"
                                        className="form-input"
                                    />
                                    <hr />
                                    <input
                                        type="text"
                                        name="profilePict"
                                        value={cast?.profilePict}
                                        onChange={(e) => handleAddCast(index, e)}
                                        placeholder="Profile Picture Url"
                                        className="form-input"
                                    />
                                </div>
                                <button
                                    className="delete-cast-form-button"
                                    onClick={() => handleDeleteCastForm(index)}
                                    type="button"
                                >
                                    <span className="icon material-symbols-outlined me-2">delete</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        <button
                            className="add-cast-form-button"
                            onClick={() => handleAddCastForm()}
                            type="button"
                        >
                            <span className="icon material-symbols-outlined me-2">add</span>
                            <span>Add Cast</span>
                        </button>
                    </div>

                    <div className="form-button-group">
                        <Link to="/">
                            <button className="form-cancel-link">Cancel</button>
                        </Link>
                        <button className="form-submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default FormMovie