import './Navbar.css'



function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navbar-color sticky-top">
            <div className="container-fluid">
                <h3 onClick={() => props.setPage('Home')} className='m-3 headFont'>Josh Dale</h3>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav navbar-nav">
                        <li className='nav-item'>
                        <a href='#'><button onClick={() => props.setPage('Home')} className="btn px-2 text-white">
                                Home
                            </button></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'><button onClick={() => props.setPage('Portfolio')} className="btn px-2 text-white">
                                Portfolio
                            </button></a>
                        </li>
                        <li className='nav-item'>
                        <a href='#'><button onClick={() => props.setPage('Blog')} className="btn px-2 text-white">
                                Blog
                            </button></a>
                        </li>
                        <li className='nav-item'>
                        <a href='#'><button onClick={() => props.setPage('Contact')} className="btn px-2 text-white">
                                Contact
                            </button></a>
                        </li>
                        <li className='nav-item'>
                        <a href='#'><button onClick={() => props.setPage('About')} className="btn px-2 text-white">
                                About
                            </button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default Navbar