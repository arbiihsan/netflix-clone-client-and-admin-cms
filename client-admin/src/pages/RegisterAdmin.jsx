import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../stores/actions/actionCreator";
import { toast } from "react-toastify";
import ReactSpinner from "../components/ReactSpinner";


const RegisterAdmin = () => {
  const defaultValue = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const { userLoading } = useSelector((state) => state.user);
  const [form, setForm] = useState({ ...defaultValue });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(register(form));

      if (!response) throw new Error("Failed to register admin");

      setForm(defaultValue);

      toast.success("Successfully registered new Admin");
    } catch (err) {
      console.log(err);
      toast.error(Array.isArray(err) ? err[0] : err)
    }
  };

  if (userLoading) {
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
    <section className="register-section">
      <div className="header">
        <h2>Register Admin</h2>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="inputLoginRegister"
          type="text"
          name="username"
          placeholder="Username"
          id="register-username"
          onChange={handleChange}
          required />
        <input
          className="inputLoginRegister"
          type="text"
          name="email"
          placeholder="Email Address"
          id="register-email"
          onChange={handleChange}
          required />
        <input
          className="inputLoginRegister"
          type="password"
          name="password"
          placeholder="Password"
          id="register-password"
          onChange={handleChange}
          required />
        <input
          className="inputLoginRegister"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          id="register-phoneNumber"
          onChange={handleChange}
          required />
        <input
          className="inputLoginRegister"
          type="text"
          name="address"
          placeholder="Address"
          id="register-address"
          onChange={handleChange}
          required />


        <button className="buttonLoginRegister" type="submit">Login</button>
      </form>
    </section>


  )
}

export default RegisterAdmin