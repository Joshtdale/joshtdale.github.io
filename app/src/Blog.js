import { useState } from "react"
import './Blog.css'
import BlogSprint6 from "./blogs/BlogSprint6"
import BlogTemplate from "./blogs/BlogTemplate"
import { Route, Routes } from "react-router-dom";
import blogList from './BlogList'





function BlogTeaser(props) {

    let elementKey = 0
    return (
        <div className="row d-flex justify-content-center teaserContainer">
            {blogList.map((item) => {
                elementKey += 1
                return (
                    // <div className="row">
                    // <div className="btn text-light" onClick={() => props.setPage(item.title)}>
                    <div key={elementKey} className="col-sm-12 col-md-5 col-lg-5 p-4 teaserCard m-3">
                        <h3 className="mb-0">{item.title}</h3>
                        <div className="mb-1 text-muted">{item.date}</div>
                        <p className="card-text">{item.description}</p>
                        <button className="btn text-light border-secondary" onClick={() => props.setPage(item.title)}>Continue reading</button>
                    </div>
                    // </div>
                    // <BlogTeaser title={item[0]} description={item[1]} setPage={setPage} />
                    // </div>
                )
            })}
        </div>
    )
}


function HomeButton(props) {
    return (
        <div className="row">
            <div className="col p-3 d-flex flex-column position-static mt-5">
                <button className='btn blogHomeBtn' onClick={() => props.setPage('blogHome')}>Back</button>
            </div>
        </div>
    )
}


function Blog() {
    const [page, setPage] = useState('blogHome')

    return (
        <div className="m-4">
                {/* <Routes>
                <Route
                exact
                path='/*'
                element={<BlogTeaser setPage={setPage} />}
                /> */}
                {/* <Route
                exact
                path='/blog/1'
                element={<BlogTemplate blogList={blogList[0]}/>}
            /> */}
                {/* <Route
                    exact
                    path='/blog'
                    element={<Blog />}
                /> */}
            {/* </Routes> */}
            {page === 'blogHome' && <BlogTeaser setPage={setPage} />}
            
            {page !== 'blogHome' && <HomeButton setPage={setPage} />}
            {page === 'Blog 1' && <BlogTemplate blogList={blogList[0]} />}
            {page === 'Week 3' && <BlogTemplate blogList={blogList[1]} />}
            {page === 'Week 4' && <BlogTemplate blogList={blogList[2]} />}
            {page === 'Week 5' && <BlogTemplate blogList={blogList[3]} />}
            {page === 'Week 6' && <BlogSprint6 blogList={blogList[4]} />}
            {page === 'Week 7' && <BlogTemplate blogList={blogList[5]} />}
        </div>
    )
}

export default Blog