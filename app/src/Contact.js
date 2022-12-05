import React from 'react'
import email from './images/linkImages/Email.svg'
import me from './images/linkImages/me.jpg'
import phone from './images/linkImages/Phone.svg'
import github from "./images/linkImages/Github.svg"
import instagram from "./images/linkImages/Instagram.svg"
import youtube from "./images/linkImages/Youtube.svg"
import website from "./images/linkImages/Website.svg"
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
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- <div className="col"> --> */}
                        <div className="card bg-light m-3 w-75 opacity-75">
                            <div className="row justify-content-center mt-4">

                                <div className="col m-1 mt-3">
                                    <a href="mailto: joshuadale65@gmail.com"><img src={email}></img></a>
                                    {/* <!-- img tag wrapped in a tag to make image clickable--> */}
                                </div>

                                <div className="col m-1"><a>
                                    <img src={phone}></img></a>
                                </div>

                                <div className="col m-1">
                                    <a href="https://github.com/Joshtdale"><img src={github}></img></a>
                                </div>

                            </div>

                            <div className="card m-5 bg-dark"></div>

                            <div className="row mb-4">

                                <div className="col m-1">
                                    <a href="https://www.instagram.com/_josh_dale_/"><img src={instagram}></img></a>
                                </div>

                                <div className="col m-1">
                                    <a href="https://joshtdale.github.io/"><img src={website}></img></a>
                                </div>

                                <div className="col m-1 mt-3">
                                    <a><img src={youtube}></img></a></div>
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