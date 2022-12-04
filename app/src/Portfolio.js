import React from 'react'
import './Portfolio.css'

let count = 0 // Counter for project card mapping

function IFrameCard(props) {

    const baseClasses = 'card portfolioCards card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'

    return (
        <div className="col portCard">
            <div className={`${baseClasses}`}>
                <div className="d-flex flex-column text-white text-shadow-1">
                    <iframe className="embed-responsive-item portfolioIframe" src={props.link}>

                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <a href={props.link}><button className="btn btn-secondary">View project</button></a>
                            </li>

                            {/* <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em">
                                    <use xlink:href="#calendar3"></use>
                                </svg>
                                <small>10/07/22</small>
                            </li> */}
                        </ul>
                    </iframe>
                </div>
            </div>
        </div>
    )
};

function PortfolioCard(props) {

    const baseClasses = 'card portfolioCards h-100 w-100 card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'

    return (
        <div className="col-sm-12 col-lg-5 portCard m-3">
            <div className={`${baseClasses + ' ' + props.project}`}>
                <div className="d-flex flex-column text-white text-shadow-1">

                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <a href={props.link}><button className="btn btn-secondary">View project</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

const projects = [ // Project data
    { // Deadly Tic Tac Toe
        project: 'tic-tac-toe',
        link: 'https://joshtdale.github.io/tic-tac-toe/'
    },
    { // To-do List
        project: 'to-do-list',
        link: 'https://joshtdale.github.io/todo-list/'
    },
    { // Alarm Clock
        project: 'alarm-clock',
        link: 'https://joshtdale.github.io/alarm-clock/'
    },
    { // Scary Story Generator
        project: 'scary-story-generator',
        link: 'https://joshtdale.github.io/silly-story-generator/sandbox/sandbox.html'
    },
    { // Mind reader
        project: 'mind-reader',
        link: 'https://joshtdale.github.io/mind-reader/'
    },
    { // Thundercat website
        project: 'thundercat',
        link: 'https://dale-webpage-project.glitch.me/index.html'
    },
    { // Weather app
        project: 'weather-app',
        link: 'https://joshtdale.github.io/weather-app/'
    },
]



function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <div className='row d-flex justify-content-center'>
                {projects.map((item) => {
                    count += 1
                    console.log(count)
                    return (
                        <PortfolioCard key={count} project={item.project} link={item.link} />
                    )
                })}
            </div>
        </div>
    )
};

export default Portfolio