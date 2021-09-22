const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Mortgage app</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Calculate</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">History</a>
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