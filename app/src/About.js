import { React, useState } from 'react'
import profile from './images/dale-josh-2.jpg'
import tulip from './images/latteArt/tulip.jpg'
import swan from './images/latteArt/swan.jpg'
import rosetta from './images/latteArt/rosetta.jpg'
import cortado from './images/latteArt/cortado.jpg'
import HTML from './images/stackIcons/html.png';
import JavaScript from './images/stackIcons/java-script.png';
import CSS from './images/stackIcons/css-3.png';
import ReactJS from './images/stackIcons/react.svg';
import Python from './images/stackIcons/python.png';
import Sql from './images/stackIcons/sql.png';
import Postgres from './images/stackIcons/postgres.png';
import Bootstrap from './images/stackIcons/bootstrap.svg';

import './About.css'

let latteArt = [swan, tulip, rosetta, cortado]
let stack = [ReactJS, JavaScript, Python, Postgres, Sql, Bootstrap, HTML, CSS]

function About() {
    const [img, setImg] = useState(0)
    let count = 0

    // function ImgSelector(){
    //     if (count === 5){
    //         count = 0
    //     } else {
    //     count += 1
    //     }
    //     setImg(count)
    // }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="aboutCard">
                        <div className="row">
                            <div className="col text-center">
                                <img className='aboutImg m-5' src={profile} alt="Me" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center text-center">
                                <div className="row w-100">
                                    <div className="col-12">
                                        <p className='m-5'>Full Stack Web Developer leveraging a Bachelor's
                                            degree in Media Communications from Asbury University to create a
                                            synergy in technical skills and people. Before web development I spend 5 years as a Café manager where I specialized
                                            in employee training, coffee education, and latte art.</p>
                                        {stack.map((icon) => (<img className='icons m-1' src={icon}></img>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12">
                    <div className="aboutCard">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center text-center">
                                <div className="row">
                                    <div className="col-12">
                                        <p className='m-5'>Before web development I spend 5 years as a Café manager where I specialized
                                            in employee training, coffee education, and latte art.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button onClick={ImgSelector} className='btn btn-secondary'>Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <img className='latteImg' src={latteArt[img]} alt="Me" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        // </div >
    )
}

export default About