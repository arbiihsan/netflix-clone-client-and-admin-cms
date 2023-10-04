import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../stores/actions/actionCreator";
import netflix from "../assets/netflix.svg"
import netflixteaser from "../assets/netflixteaser.png"
import { toast } from "react-toastify";

const Login = () => {
    const defaultValue = {
        email: "",
        password: "",
    };

    // const { userLoading } = useSelector((state) => state.user);
    const [form, setForm] = useState({ ...defaultValue });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e?.target
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await dispatch(login(form));

            if (!response) throw new Error("Failed to login admin");

            setForm(defaultValue);

            navigate("/");

            toast.success("You are logged in!");
        } catch (err) {
            console.log(err);
            toast.error(err)
        }
    };

    return (
        <section className="login-section">
            <div className="netflix-icon-login">
                <img src={netflix} alt="netflix logo" />
            </div>

            <div className="netflix-background-login">
                <img src={netflixteaser} alt="" />
            </div>

            <form id="login-form" className="loginRegister" action="" onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Admin Login</h2>
                </div>
                <input className="inputLoginRegister" type="text" name="email" placeholder="Email Address" id="login-email"
                    onChange={handleChange} value={form.email} required />
                <input className="inputLoginRegister" type="password" name="password" placeholder="Password" id="login-password"
                    onChange={handleChange} value={form.password} required />
                <button className="buttonLoginRegister" type="submit">Login</button>
            </form>
        </section>
    )
}

export default Login