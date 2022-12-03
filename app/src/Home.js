import './Home.css'

function Home() {
    window.addEventListener('scroll', () => {
        let value = document.documentElement.scrollTop
        // console.log(value)
        let text = document.getElementById('homeText')
        if (value > 250) {
            console.log('It works')
                text.style.display = "none";
        } else {
            text.style.display = "initial";
        }
    });
    // function scroll(){
    //     document.documentElement.scrollTop = document.body.scrollTop = 190
    // }

    return (
        <div className='home-container'>
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <div className="jumbotron">
                        <div className="row">
                            <div id='homeText' className="col bioText headFont">
                                <p className="fs-1 ml-1">Josh Dale</p>
                                <p className="mx-3">Web developer</p>
                                <p className="btn text-light opacity-75 btn-lg" role="button">Read my blog »</p>
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