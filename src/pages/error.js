import React from "react";
import '../styles/blog.css';
import {SEO} from "../components";

const Error = () => {
    return (
        <div className="page">
            <header>
                <h1>404: Page not found</h1>
            </header>
            <main>
                <SEO title={'404'} description={'Page not found'}/>
            </main>
        </div>
    )
};

export default Error;