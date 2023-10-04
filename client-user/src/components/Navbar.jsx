import { useEffect, useState } from "react";
import netflix from "../assets/netflix.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false)

  const NavbarTransistion = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", NavbarTransistion);
    return () => window.removeEventListener("scroll", NavbarTransistion)
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <div>
          <Link className="navbar-links" to="/">
            <img
              className="nav-logo"
              src={netflix}
              alt=""
            />
          </Link>
        </div>

        <div className="links">
          <Link className="navbar-links" to="/">
            Home
          </Link>
          <Link className="navbar-links" to="/under-construction">
            TV Shows
          </Link>
          <Link className="navbar-links" to="/under-construction">
            Movies
          </Link>
          <Link className="navbar-links" to="/under-construction">
            My List
          </Link>
          <Link className="navbar-links" to="/under-construction">
            Browse by Languages
          </Link>
        </div>

        <div>
          <Link className="navbar-links" to="/under-construction">
            <img
              className="nav-avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar