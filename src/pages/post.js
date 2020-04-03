import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {useParams} from "react-router";

import '../styles/blog.css'
import Loading from "./loading";
import Error from "./error";
import {POSTS} from "../components/constants";

const Post = () => {
    const { post } = useParams();
    const [markdown, setMarkdown] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(!markdown){
            async function fetchBlog (){
                try {
                    // Look for blog
                    const postPath = require(`../posts/${post}.md`);
                    await fetch(postPath).then(r => {return r.text()}).then(text =>  setMarkdown(text));
                } catch (e) {
                    // If blog is not found
                    console.log(e);
                    setError(true);
                }
            }
            fetchBlog().then(r => null);
        }
    }, [post, markdown]);
    let blogpost = {};
    if(markdown){
        blogpost = POSTS.find(a => a.post === post);
        console.log(blogpost)
    }

    return ( error ? <Error/> :
        markdown ? <div className='page blog'>
            <header style={{'backgroundImage': `url(${blogpost.image})`}}><h1>{post}</h1></header>
            <main><Markdown source={markdown}/></main>
        </div> : <Loading/>
    )
};

export default Post;