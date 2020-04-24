import React from "react";
import {Link} from "react-router-dom";
import '../styles/blog.css';
import {POSTS, SEO} from '../components'

const Blog = () => {
    return (
        <div className="page blog display-blog">
            <header>
                <h1>Development Blog</h1>
            </header>
            <main>
                <SEO title={'Our Blogs'} description={'See a list of our blogs here!'}/>
                { POSTS.map((e, i) => {
                    const date = new Date(e.date);
                    return(
                        <div className={'card'} key={i}>
                            <Link to={`/blog/${e.post}`}>
                                <img src={e.image} alt={'blog'}/>
                                <h1>{e.title}</h1>
                                <small>
                                    Posted on {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </small>
                            </Link>
                        </div>
                    )}
                    )
                }
            </main>
        </div>
    )
};

export default Blog;