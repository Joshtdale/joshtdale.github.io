import React from 'react'
import './Portfolio.css'

function IFrameCard(props){

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

function PortfolioCard(props){

    const baseClasses = 'card portfolioCards h-100 w-100 card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'
    
        return (
            <div className="col portCard">
                    <div className={`${baseClasses + ' ' + props.project}`}>
                        <div className="d-flex flex-column text-white text-shadow-1">
                            
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
                        </div>
                    </div>
                </div>
        )
    };
    


function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <div className="row m-5">
                <IFrameCard project={'tic-tac-toe'} link={'https://joshtdale.github.io/tic-tac-toe/'}/>
                <PortfolioCard project={'mind-reader'} link={'https://joshtdale.github.io/mind-reader/'}/>
                <IFrameCard project={'alarm-clock'} link={'https://joshtdale.github.io/alarm-clock/'}/>
            </div>
            <div className="row m-5">
                <IFrameCard project={'scary-story-generator'} link={'https://joshtdale.github.io/silly-story-generator/sandbox/sandbox.html'}/>
                <IFrameCard project={'thundercat'} link={'https://dale-webpage-project.glitch.me/index.html'}/>
                <PortfolioCard project={'weather-app'} link={'https://joshtdale.github.io/weather-app/'}/>
            </div>
        </div>
    )
};

export default Portfolio