import { React, useState } from 'react'
import './Portfolio.css'
import HTML from './images/stackIcons/html.png';
import JavaScript from './images/stackIcons/java-script.png';
import CSS from './images/stackIcons/css-3.png';
import ReactJS from './images/stackIcons/react.svg';
import Python from './images/stackIcons/python.png';
import Postgres from './images/stackIcons/postgres.png';
import Bootstrap from './images/stackIcons/bootstrap.svg';
import django from './images/stackIcons/django.png';


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

function ProjectImage(props){
    const baseClasses = 'card portfolioCards cardHeight card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'
    const project = props.project
    return (
        <div className="col-sm-12 col-md-5 col-lg-5 m-3">
                        <div className={`${baseClasses + ' ' + project.class}`}>

                        </div>
                    </div>
    )
}

function ProjectInfo(props){
    
    const project = props.project
    return (
        <div className="col d-flex justify-content-center container">
            <div className="row text-center">
                <div className="col-12">
                    <h2 className='m-4'>{project.name}</h2>
                </div>
                <div className="col-12 description overflow-auto">
                    <div>{project.description}</div>
                </div>
                <div className="col-12">
                    <a href={project.link}><button className="btn btn-secondary m-2">View live project</button></a>
                    <a href={project.source}><button className="btn btn-secondary m-2">View source code</button></a>
                </div>
                <div className="col-12">

                    {project.stack.map((item) =>  (
                            <img key={props.key} title={item.name} className='icons m-1' src={item.icon} alt={item.name}></img>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}


function PortfolioCard(props) {

    // const baseClasses = 'card portfolioCards h-100 w-100 card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'
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
        // return (
        //     <div className="col-sm-12 col-lg-10 portCard m-3">
        //         <div className="row h-100 bg-secondary rounded bg-opacity-25">
        //             {/* <div className="col d-flex justify-content-center container">
        //                 <div className="row text-center">
        //                     <div className="col-12">
        //                         <h1 className='headFont'>{project.name}</h1>
        //                     </div>
        //                     <div className="col-12">
        //                         <div>{project.description}</div>
        //                     </div>
        //                     <div className="col-12">
        //                         <a href={project.link}><button className="btn btn-secondary m-2">View live project</button></a>
        //                         <a href={project.source}><button className="btn btn-secondary m-2">View source code</button></a>
        //                     </div>
        //                     <div className="col-12">

        //                         {project.stack.map((item) =>  (
        //                                 <img title={item.name} className='icons m-1' src={item.icon} alt={item.name}></img>
        //                             )
        //                         )}
        //                     </div>
        //                 </div>
        //             </div> */}
        //             {/* <div className="col-sm-12 col-md-5 col-lg-5 m-3">
        //                 <div className={`${baseClasses + ' ' + project.class}`}>

        //                 </div>
        //             </div> */}

        //         </div>
        //     </div>
        // )
        return (
            <div className="col-sm-12 col-lg-10 portCard m-3">
                <div className="row d-flex justify-content-center mt-4">
                    <ProjectInfo project={project} />
                    <ProjectImage project={project} />
                </div>
            </div>

        )
    } else {
        // return (
        //     <div className="col-sm-12 col-lg-10 portCard m-3">
        //         <div className="row h-100 bg-secondary rounded bg-opacity-25">
        //             <div className="col-sm-12 col-md-5 col-lg-5 m-3">
        //                 <div className={`${baseClasses + ' ' + project.class}`}>
        //                     {/* <div className="d-flex flex-column text-white text-shadow-1">

        //                     <ul className="d-flex list-unstyled mt-auto">
        //                         <li className="me-auto">
        //                             <a href={project.link}><button className="btn btn-secondary">View project</button></a>
        //                         </li>
        //                     </ul>
        //                 </div> */}
        //                 </div>
        //             </div>
        //             <div className="col d-flex justify-content-center container">
        //                 <div className="row text-center">
        //                     <div className="col-12">
        //                         <h1 className='headFont'>{project.name}</h1>
        //                     </div>
        //                     <div className="col-12">
        //                         <div>{project.description}</div>
        //                     </div>
        //                     <div className="col-12">
        //                         <a href={project.link}><button className="btn btn-secondary m-2">View live project</button></a>
        //                         <a href={project.source}><button className="btn btn-secondary m-2">View source code</button></a>
        //                     </div>
        //                     <div className="col-12">

        //                         {project.stack.map((item) =>  (
        //                                 <img title={item.name} className='icons m-1' src={item.icon} alt={item.name}></img>
        //                             )
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
        return (
            <div className="col-sm-12 col-lg-10 portCard m-3">
                <div className="row d-flex justify-content-center mt-4">
                    <ProjectImage project={project} />
                    <ProjectInfo project={project} />
                </div>
            </div>
        )
    }


};



const projects = [ // Project data
    { // ChatR
        name: 'ChatR',
        class: 'chatr',
        link: 'https://chatr-db.web.app/',
        source: 'https://github.com/Joshtdale/messaging-app',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            },
            {
                icon: django,
                name: 'django' 
            },
            {
                icon: Python,
                name: 'Python'
            },
            {
                icon: Postgres,
                name: 'Postgresql'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },  
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'For this project I set out to clone iMessage. To be honest, this was not my first choice solely because it scared me. The thought of having to figure out how to copy one of the most well know applications on the planet was extremely intimidating. Yet it\'s those very reasons that convinced me I needed to do it. I knew getting out of my comfort zone would be the best way for me to learn. Why iMessage? I think Apple is the king of simplistic design. If you think about all of the features that iMessage has and the minimal amount of buttons, it is amazing how they can create a user experience that is so intuitive.'
    },
    { // To-do List
        name: 'To-do List',
        class: 'to-do-list',
        link: 'https://joshtdale.github.io/todo-list/',
        source: 'https://github.com/Joshtdale/todo-list',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            }, 
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            }, 
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'This basic to-do list uses local storage to assist users'
    },
    { // Secret Sauce (React restaurant website)
        name: 'Secret Sauce',
        class: 'secret-sauce',
        link: 'https://github.com/Joshtdale/react-restaurant',
        source: 'https://github.com/Joshtdale/react-restaurant/tree/dev',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            }, 
            {
                icon: Python,
                name: 'Python'
            },
            {
                icon: django,
                name: 'django' 
            },
            {
                icon: Postgres,
                name: 'Postgresql'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },  
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'Created and launched Restaurant Website for a fictional company as a showcase for skills with React.JS'
    },
    { // Deadly Tic Tac Toe
        name: 'Deadly Tic Tac Toe',
        class: 'tic-tac-toe',
        link: 'https://joshtdale.github.io/tic-tac-toe/',
        source: 'https://github.com/Joshtdale/tic-tac-toe',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },  
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'A deadly virtual tic-tac-toe utilizing VanillaJS'
    },

    { // Weather app
        name: 'Weather app',
        class: 'weather-app',
        link: 'https://joshtdale.github.io/weather-app/',
        source: 'https://github.com/Joshtdale/weather-app',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },  
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'A basic weather app built with VanillaJS and Axios, This was our first week where we weren\'t allowed to write any HTML, all elements had to be generated with JavaScript.'
    },
    { // Alarm Clock
        name: 'Alarm Clock',
        class: 'alarm-clock',
        link: 'https://joshtdale.github.io/alarm-clock/',
        source: 'https://github.com/Joshtdale/alarm-clock',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            }, 
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: ''
    },
    { // Scary Story Generator
        name: 'Scary Story Generator',
        class: 'scary-story-generator',
        link: 'https://joshtdale.github.io/silly-story-generator/sandbox/sandbox.html',
        source: 'https://github.com/Joshtdale/silly-story-generator',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            }, 
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: ''
    },
    { // Mind reader
        name: 'Mind reader',
        class: 'mind-reader',
        link: 'https://joshtdale.github.io/mind-reader/',
        source: 'https://github.com/Joshtdale/mind-reader',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            }, 
            {
                icon: JavaScript,
                name: 'JavaScript'
            }, 
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: ''
    },
    { // Thundercat website
        name: 'Thundercat website',
        class: 'thundercat',
        link: 'https://dale-webpage-project.glitch.me/index.html',
        source: 'https://dale-webpage-project.glitch.me/index.html',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: ''
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