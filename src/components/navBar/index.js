import { NavLink } from "react-router-dom";

const Navbar = () => {    
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <h2 className="navbar-brand">Mortgage app</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/interests" className="nav-link" activeClassName="active"  aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
               <NavLink to="/calculate" className="nav-link" activeClassName="active" >Calculate</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/history" className="nav-link" activeClassName="active" >History</NavLink>
            </li>
        </ul>
        <span className="navbar-text">
            A place where you can calculate your mortgage
        </span>
        </div>
        </div>
        </nav>
    )
}

export default Navbar;