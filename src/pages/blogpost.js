import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {useParams} from "react-router";

import '../styles/blog.css'

const Blogpost = () => {
    const { blog } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(()=>{
        if(!markdown){
            async function fetchBlog (){
                let blogPath = require(`../blogs/${blog}.md`);
                await fetch(blogPath).then(r => {return r.text()}).then(text =>  setMarkdown(text));
            }
            fetchBlog().then(r => null);
        }
    }, [blog, markdown]);

    return (
        <div className='page blog'>
            <header><h1>{blog}</h1></header>
            <main><Markdown source={markdown}/></main>
        </div>
    )
};

export default Blogpost;