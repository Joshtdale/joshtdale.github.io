import { React,useState } from 'react'
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
    const project = props.project
    // console.log(props.count)

    var x = window.matchMedia("(max-width: 700px)")
    window.addEventListener("resize", () => {
        if (x.matches) {
            (console.log('Small screen size: If you are seeing this, It is because I have not yet optimized the page layout for starting at desktop size then resizing to mobile size. Please reload the window at this sizing to see my intended output'))
        }
    });
    

    // console.log(props.count, props.project)
    if (props.count % 2 !== 0 && !x.matches) {
        return (
            <div className="col-sm-12 col-lg-10 portCard m-3">
                <div className="row h-100 bg-secondary bg-opacity-25">
                    <div className="col d-flex justify-content-center">
                        <h1 className='headFont'>{project.name}</h1>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 m-3">
                        <div className={`${baseClasses + ' ' + project.class}`}>
                            {/* <div className="d-flex flex-column text-white text-shadow-1">

                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <a href={project.link}><button className="btn btn-secondary">View project</button></a>
                                </li>
                            </ul>
                        </div> */}
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="col-sm-12 col-lg-10 portCard m-3">
                <div className="row h-100 bg-secondary bg-opacity-25">
                    <div className="col-sm-12 col-md-5 col-lg-5 m-3">
                        <div className={`${baseClasses + ' ' + project.class}`}>
                            {/* <div className="d-flex flex-column text-white text-shadow-1">

                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <a href={project.link}><button className="btn btn-secondary">View project</button></a>
                                </li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <h1 className='headFont'>{project.name}</h1>
                    </div>
                </div>
            </div>
        )
    }


};



const projects = [ // Project data
    { // Deadly Tic Tac Toe
        name: 'Deadly Tic Tac Toe',
        class: 'tic-tac-toe',
        link: 'https://joshtdale.github.io/tic-tac-toe/',
    },
    { // To-do List
        name: 'To-do List',
        class: 'to-do-list',
        link: 'https://joshtdale.github.io/todo-list/'
    },
    { // Alarm Clock
        name: 'Alarm Clock',
        class: 'alarm-clock',
        link: 'https://joshtdale.github.io/alarm-clock/'
    },
    { // Scary Story Generator
        name: 'Scary Story Generator',
        class: 'scary-story-generator',
        link: 'https://joshtdale.github.io/silly-story-generator/sandbox/sandbox.html'
    },
    { // Mind reader
        name: 'Mind reader',
        class: 'mind-reader',
        link: 'https://joshtdale.github.io/mind-reader/'
    },
    { // Thundercat website
        name: 'Thundercat website',
        class: 'thundercat',
        link: 'https://dale-webpage-project.glitch.me/index.html'
    },
    { // Weather app
        name: 'Weather app',
        class: 'weather-app',
        link: 'https://joshtdale.github.io/weather-app/'
    },
]



function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <div className='row d-flex justify-content-center'>
                {projects.map((item) => {
                    count += 1
                    // console.log(count)
                    return (
                        <PortfolioCard key={count} count={count} project={item} />
                    )
                })}
            </div>
        </div>
    )
};

export default Portfolio