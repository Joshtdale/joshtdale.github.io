function Blog1() {
    return (
        <>
            <div className="row justify-content-center text-center">
                {/* <div className="col"></div> */}
                <div className="col-10 mt-5">
                    <h1>Josh Dale's Blog</h1>
                    <p>This is my first blog post of many documenting 
                        my journey through the process of becoming a 
                        web developer.</p>

                </div>
            </div>
            <div className="row justify-content-center text-center">
                {/* <div className="col"></div> */}
                <div className="col-10 mt-5">
                    <h1>A little about me</h1>
                    <p>I love building things and seeing results.
                        I'm hoping these characteristics are a good
                        indicator that I will enjoy a career in web
                        development. When I was a kid, I would take
                        apart all my toys and try to put them back
                        together. In middle school, I taught myself to
                        solder and rewire my guitars. This skill proved
                        useful in college when I quickly became the guy
                        everyone went to for electric instrument
                        repairs and modifications.</p>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 m-5 card bg-dark bg-opacity-50">
                    <h3 className="text-center mb-4">Weekly Q&A</h3>
                    <ul>
                        <li>
                            <h5>Was your first week what you expected? Why? Why not?</h5>
                            <p>
                                This first week has been pretty brutal. I'm still trying to
                                figure out how to best juggle class and working a full time job.
                            </p>
                        </li>

                        <li>
                            <h5>What are you excited or eager to learn more about?</h5>
                            <p>
                                I can't wait to get more experience with the tools we are
                                using in this course so that I can feel a little more
                                comfortable with the course work.
                            </p>
                        </li>

                        <li>
                            <h5>What is something about you that can only be learned by reading this blog?</h5>
                            <p>In college I was in a band that would travel and play at youth group conferences. </p>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog1