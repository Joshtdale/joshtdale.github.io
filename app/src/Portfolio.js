import React from 'react'
import './Portfolio.css'

function PortfolioCard(props){

const baseClasses = 'card portfolioCards card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg'

    return (
        <div className="col portCard">
                <div className={`${props.project} ${baseClasses}`}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <a href="https://5500-joshtdale-tictactoe-6dwwaoasjxs.ws-us70.gitpod.io/index.html"><button className="btn btn-secondary">View project</button></a>
                            </li>
                            
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em">
                                    {/* <use xlink:href="#calendar3"></use> */}
                                </svg>
                                <small>10/07/22</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
};

function Portfolio() {
    return (
        <div className="row m-5">
            <PortfolioCard project={'tic-tac-toe'}/>
        </div>
    )
};

export default Portfolio