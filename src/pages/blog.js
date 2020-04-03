import React from "react";
import {Link} from "react-router-dom";
import '../styles/blog.css';

const Blog = () => {
    return (
        <div className="page blog">
            <header>
                <h1>Development Blog</h1>
            </header>
            <main>
                <Link to='/blog/team-document'>Team Document</Link>
                <Link to='/blog/game-treatment'>Game Treatment</Link>
            </main>
        </div>
    )
};

export default Blog;