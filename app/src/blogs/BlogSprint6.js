import React from 'react'
// import Blog from '../Blog'

function BlogSprint6(props) {
  let blog = props.blogList
  return (
    <>
        <div className="row justify-content-center text-center">
            {/* <div className="col"></div> */}
            <div className="col-10 mt-5">
                <h1>{blog.subHeader}</h1>
                <p></p>

            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-10 m-5 card bg-dark bg-opacity-50">
                <h3 className="text-center mb-4">Weekly Q&A</h3>
                <ul>
                    <li>
                        <h5>{blog.qa.q1}</h5>
                        <p>{blog.qa.a1}</p>
                    </li>

                    <li>
                        <h5>{blog.qa.q2}</h5>
                        <ol>
                          <li>{blog.qa.o1}</li>
                            <p>{blog.qa.li1}</p>
                          <li>{blog.qa.o2}</li>
                            <p>{blog.qa.li2}</p>
                          <li>{blog.qa.o3}</li>
                            <p>{blog.qa.li3}</p>
                        </ol>
                    </li>

                    <li>
                        <h5>{blog.qa.q3}</h5>
                            <p>{blog.qa.a3} <a href={blog.qa.href}>codewars</a> {blog.qa.a}</p>
                    </li>

                </ul>
            </div>
        </div>
        </>
  )
}

export default BlogSprint6