import { useState } from "react"
import Blog1 from "./blogs/Blog1"
import BlogSprint3 from "./blogs/BlogSprint3"
import BlogSprint4 from "./blogs/BlogSprint4"
import BlogSprint5 from "./blogs/BlogSprint5"
import BlogSprint6 from "./blogs/BlogSprint6"
import BlogSprint7 from "./blogs/BlogSprint7"

const blogList = [
    {
        title: 'Blog 1',
        date: 'Aug 21',
        description: 'The first of 4 weeks of online onboarding before in person bootcamp',
        blog: <Blog1 />
    },
    {
        title: 'Week 3',
        date: 'Nov 12',
        description: 'The description for week 3',
        blog: <BlogSprint3 />
    },
    {
        title: 'Week 4',
        date: 'Nov 12',
        description: 'The description for week 4',
        blog: <BlogSprint4 />
    },
    {
        title: 'Week 5',
        date: 'Nov 12',
        description: 'The description for week 5',
        blog: <BlogSprint5 />
    },
    {
        title: 'Week 6',
        date: 'Nov 12',
        description: 'The description for week 6',
        blog: <BlogSprint6 />
    },
    {
        title: 'Week 7',
        date: 'Nov 1',
        description: 'The description for week 7',
        blog: <BlogSprint7 />
    },
]

function BlogTeaser(props) {


    return (
        blogList.map((item) => {
            return (
                <div className="row">
                    <div className="col p-4 d-flex flex-column bg-dark bg-opacity-50 position-static m-5">
                        <h3 className="mb-0">{item.title}</h3>
                        <div className="mb-1 text-muted">{item.date}</div>
                        <p className="card-text mb-auto">{item.description}</p>
                        <button className="btn text-light" onClick={() => props.setPage(item.title)}>Continue reading</button>
                    </div>
                </div>
                // <BlogTeaser title={item[0]} description={item[1]} setPage={setPage} />
            )
        })
    )
}


function HomeButton(props) {
    return (
        <div className="row">
            <div className="col p-4 d-flex flex-column position-static m-5">
                <button className='btn btn-secondary' onClick={() => props.setPage('blogHome')}>Home</button>
            </div>
        </div>
    )
}


function Blog() {
    const [page, setPage] = useState('blogHome')
    const [blog, setBlog] = useState()

    function BlogMap() {
        {
            blogList.map((item) => {
                // return (
                { page === item.title && item.blog }
                // )
            })
        }
    }

    return (
        <div className="m-4">
            {page === 'blogHome' && <BlogTeaser setPage={setPage} />}
            {page !== 'blogHome' && <HomeButton setPage={setPage} />}
            {/* page !== 'blogHome' && page /> */}
            {/* <page /> */}
        

            {page === 'Blog 1' && <Blog1 />}
            {page === 'Week 3' && <BlogSprint3 />}
            {page === 'Week 4' && <BlogSprint4 />}
            {page === 'Week 5' && <BlogSprint5 />}
            {page === 'Week 6' && <BlogSprint6 />}
            {page === 'Week 7' && <BlogSprint7 />}
        </div>
    )
}

export default Blog