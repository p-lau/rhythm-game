import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {useParams} from "react-router";

const Blog = () => {
    const { blog } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(()=>{

        if(!markdown){
            async function fetchBlog (){
                const blogPath = require(`../blogs/${blog}.md`);

                await fetch(blogPath).then(r => {return r.text()}).then(text =>  setMarkdown(text));

            }
            fetchBlog().then(r => null);
        }
    }, [blog, markdown]);

    return (
        <Markdown source={markdown}/>
    )
};

export default Blog;