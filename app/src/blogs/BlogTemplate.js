import React from 'react'
import '/workspace/joshtdale.github.io/app/src/BlogTemplate.css'

function BlogTemplate(props) {
    let blog = props.blogList
    let QA = null
    if (blog.qa){
        QA = <div className="row justify-content-center">
        <div className="col-10 m-5 card bg-dark bg-opacity-50">
            <h3 className="text-center mb-4">Weekly Q&A</h3>
            <ul>
                <li>
                    <h5>{blog.qa.q1}</h5>
                    <p>{blog.qa.a1}</p>
                </li>

                <li>
                    <h5>{blog.qa.q2}</h5>

                    <p>{blog.qa.a2}</p>

                </li>

                <li>
                    <h5>{blog.qa.q3}</h5>
                    <p>{blog.qa.a3}</p>
                </li>

            </ul>
        </div>
    </div>
    }
    // console.log(blog)
    return (
        <div className='blogContainer'>
            <div className="row justify-content-center text-center">
                {/* <div className="col"></div> */}
                <div className="col-10 mt-5">
                    <h1>{blog.title}</h1>
                    <p>{blog.date}</p>
                    <p>{blog.description}</p>

                </div>
            </div>

            <div className="row justify-content-center text-center">
                {/* <div className="col"></div> */}
                <div className="col-10 mt-5">
                    <h1>{blog.subHeader}</h1>
                    <p>{blog.intro}</p>
                    <h2>{blog.articleHeader}</h2>
                    <p>{blog.article}</p>
                    <h2>{blog.articleHeader2}</h2>
                    <p>{blog.article2}</p>

                </div>
            </div>
            {QA}
                
        </div>
    )
}
export default BlogTemplate
