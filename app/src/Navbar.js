import skullIcon from './images/skull.png';
import './Navbar.css'

function Navbar(){
    return (
        <header className="p-3 text-bg-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg> */}
                    <img src={skullIcon} className="bi me-2" width="40" role="img"></img>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    <li><a href="https://joshtdale.github.io/pages/portfolio" className="nav-link px-2 text-white">Portfolio</a></li>
                    <li><a href="https://joshtdale.github.io/blogs/blog" className="nav-link px-2 text-white">Blog</a></li>
                    <li><a href="https://joshtdale.github.io/pages/contact" className="nav-link px-2 text-white">Contact</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form> */}

                {/* <div className="text-end">
                    <button type="button" className="btn btn-secondary">See my foolish dogs</button>
                    <button type="button" className="btn btn-secondary">Sign-up</button>
                </div> */}
            </div>
        </div>
    </header>
    )
}

export default Navbar