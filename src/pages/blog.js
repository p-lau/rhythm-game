import React from "react";
import ReactMarkdown from "react-markdown";

const Blog = props => {

    return (
        <ReactMarkdown source={props.src}/>
    )
};

export default Blog;