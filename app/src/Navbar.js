import './Navbar.css'



function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navbar-color sticky-top">
            <div className="container-fluid">
                <h3 className='m-3'>Josh Dale</h3>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <button onClick={() => props.setPage('Home')} className="btn nav-link px-2 text-white">
                                Home
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => props.setPage('Portfolio')} className="btn nav-link px-2 text-white">
                                Portfolio
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => props.setPage('Blog')} className="btn nav-link px-2 text-white">
                                Blog
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => props.setPage('Contact')} className="btn nav-link px-2 text-white">
                                Contact
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button onClick={() => props.setPage('About')} className="btn nav-link px-2 text-white">
                                About
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default Navbar