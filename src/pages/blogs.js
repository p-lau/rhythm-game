import React from "react";
import {Link} from "react-router-dom";
import '../styles/blog.css';

const Blogs = () => {
    return (
        <div className="page blog">
            <header>
                <h1>Blogs</h1>
            </header>
            <main>
                <Link to='/blogs/team-document'>Team Document</Link>
                <Link to='/blogs/game-treatment'>Game Treatment</Link>
            </main>
        </div>
    )
};

export default Blogs;