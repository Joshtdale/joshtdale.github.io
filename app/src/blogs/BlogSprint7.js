import React from 'react'

function BlogSprint7(props) {
    let blog = props.blogList
    console.log(blog)
    return (
        <>
            <div className="row justify-content-center text-center">
                {/* <div className="col"></div> */}
                <div className="col-10 mt-5">
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 m-5 card bg-dark bg-opacity-50">
                    <h3 className="text-center mb-4">Weekly Q&A</h3>
                    <ul>
                        <li>
                            <h5>{blog.q1}</h5>
                            <p>{blog.a1}</p>
                        </li>

                        <li>
                            <h5>{blog.q2}</h5>

                            <p>{blog.a2}</p>

                        </li>

                        <li>
                            <h5>{blog.q3}</h5>
                            <p>{blog.a3}</p>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default BlogSprint7
