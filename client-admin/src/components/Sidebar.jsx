import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import netflix from "../assets/netflix.svg"
import { toast } from "react-toastify";


const Sidebar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault

    localStorage.clear()
    navigate("/login")
    toast.success("Yor are logged out")
  }

  return (
    <>
      <div id="sidebar-menu">
        {/* <div className="logo-netflix">
          <img src={netflix} alt="netflix logo" />
        </div> */}
        <ul className="navigation">
          <li>
            <NavLink to="/" id="nav-dashboard">
              <span className="icon material-symbols-outlined me-2">movie</span>Dashboard / Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres" id="nav-type">
              <span className="icon material-symbols-outlined me-2">theater_comedy</span>Genres
            </NavLink>
          </li>
        </ul>
        <h5>
          <span>Account</span>
        </h5>
        <ul className="navigation">
          <li>
            <NavLink to="/register" id="nav-type">
              <span className="icon material-symbols-outlined me-2">how_to_reg</span>Register Admin
            </NavLink>
          </li>
          <li>
            <NavLink href="" id="nav-logout" onClick={logout}>
              <span className="icon material-symbols-outlined me-2">logout</span>Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar