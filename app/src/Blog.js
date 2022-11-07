import BlogSprint4 from "./blogs/BlogSprint4"
import BlogSprint3 from "./blogs/BlogSprint3"
import BlogSprint5 from "./blogs/BlogSprint5"
import BlogSprint6 from "./blogs/BlogSprint6"
import BlogSprint7 from "./blogs/BlogSprint7"

function BlogTeaser() {
    return (
        <div className="row">
            <div className="col p-4 d-flex flex-column bg-dark bg-opacity-50 position-static m-5">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
            </div>
        </div>
    )
}

function Blog() {
    return (
        <div>
            <BlogTeaser />
            {/* <BlogSprint3 /> */}
            {/* <BlogSprint4 /> */}

            {/* <BlogSprint5 />
            <BlogSprint6 />
            <BlogSprint7 /> */}

        </div>
    )
}

export default Blog