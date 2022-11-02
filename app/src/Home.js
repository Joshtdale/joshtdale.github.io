import './Home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col bioText">
                                <p className="fs-1 ml-1">Josh Dale</p>
                                <p className="opacity-75 ml-1">Web developer</p>
                                <p><a className="btn btn-secondary btn-lg" href="https://joshtdale.github.io/pages/blog-post-sprint-3" role="button">Read my blog »</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="row home-bottom">
            <div className="col">

            </div>
        </div>

        </div>
    );
}

export default Home