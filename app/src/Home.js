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
                            <div id='homeText' className="col-sm-10 col-md-6 col-lg-4 bioText">
                                <p className="fs-1 headFont">Josh Dale</p>
                                <p className='fs-6'>Full Stack Web Developer leveraging a Bachelor's
                                degree in Media Communications from Asbury University to create a 
                                synergy in technical skills and people. Five years in the coffee industry 
                                working in customer service, wholesale, cafe management, and employee training.</p>
                                <a href='#/blog' className="btn text-light" role="button">Read my blog »</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row home-bottom">
                <div className="col">

                </div>
            </div> */}

        </div>
    );
}

export default Home