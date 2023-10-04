import netflix from "../assets/netflix.svg"

const Navbar = () => {
  return (
    <header id="navbar" className="navbar">
        <nav className="navbar-container">
            <div className="navbar-logo">
                <img src={netflix} width="80" alt="IDEA" />
                <span className="navbar-brand">Admin Panel</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar