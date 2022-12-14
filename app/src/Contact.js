import React from 'react'
import email from './images/linkImages/Email.svg'
import me from './images/linkImages/me.jpg'
import phone from './images/linkImages/Phone.svg'
import github from "./images/linkImages/Github.svg"
// import instagram from "./images/linkImages/Instagram.svg"
// import youtube from "./images/linkImages/Youtube.svg"
import website from "./images/linkImages/Website.svg"
import linkedin from "./images/linkImages/linkedin.svg"
import resume from './images/linkImages/josh_dale_resume.pdf'
import './Contact.css'

function Contact() {
    return (
        <div className="row contactCard justify-content-center">
            <div className="col-xs-12 col-md-4 col-lg-4">
                <div className="card contactBg text-center">
                    <div className="row">
                        <div className="col">
                            <img src={me} className="w-50 m-3 rounded-circle img-thumbnail img-fluid"></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h1>Josh Dale</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h6 className="opacity-75">Web Developer</h6>
                            <div className="row">
                                <div className="col">
                                    <a  href='tel:859-213-3207'>(859)-213-3207</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href={resume} download="josh_dale_resume">Download my resume</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- <div className="col"> --> */}
                        <div className="card m-3 w-75 opacity-75">
                            <div className="row d-flex align-items-center justify-content-center m-4">

                                <div className="col">
                                    <a href="https://www.linkedin.com/in/joshtdale/" target="_blank"><img className='linkedin' src={linkedin} /></a>
                                </div>
                                <div className="col">
                                    <a href="mailto: joshuadale65@gmail.com" target="_blank"><img src={email} /></a>
                                    {/* <!-- img tag wrapped in a tag to make image clickable--> */}
                                </div>

                                {/* <div className="col m-1"><a>
                                    <img src={phone}></img></a>
                                </div> */}


                                <div className="col">
                                    <a href="https://github.com/Joshtdale" target="_blank"><img src={github} /></a>
                                    {/* 
                                <div className="col m-1">
                                    <a href="https://github.com/Joshtdale"><img src={github}></img></a>
                                </div> */}

                                </div>

                                {/* <div className="card m-5 bg-dark"></div> */}

                                {/* <div className="row mb-4">

                                <div className="col m-1">
                                    <a href="https://www.instagram.com/_josh_dale_/"><img src={instagram}></img></a>
                                </div>


                                </div> */}


                            </div>

                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact