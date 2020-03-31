import React from "react";
import {Link} from "react-router-dom";

const Blogs = () => {
    return (
        <div className="page">
            <header>
                <h1>Blogs</h1>
            </header>
            <main>
                <Link to='/blogs/team-document'>Team Document</Link>
            </main>
        </div>
    )
};

export default Blogs;