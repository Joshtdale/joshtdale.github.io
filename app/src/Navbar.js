import skullIcon from './images/skull.png';
import './Navbar.css'

function Navbar(props){
    return (
        <header className="p-3 text-bg-dark sticky-top">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src={skullIcon} className="bi me-2" width="40" role="img"></img>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><button onClick={() => props.setPage('Home')} className="btn nav-link px-2 text-white">Home</button></li>
                    <li><button onClick={() => props.setPage('Portfolio')} className="btn nav-link px-2 text-white">Portfolio</button></li>
                    <li><button onClick={() => props.setPage('Blog')} className="btn nav-link px-2 text-white">Blog</button></li>
                    <li><button onClick={() => props.setPage('Contact')} className="btn nav-link px-2 text-white">Contact</button></li>
                    <li><button onClick={() => props.setPage('About')} className="btn nav-link px-2 text-white">About</button></li>
                </ul>
            </div>
        </div>
    </header>
    )
};

export default Navbar