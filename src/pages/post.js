import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {useParams} from "react-router";
import '../styles/blog.css'
import {Loading, Error} from "../pages";
import {POSTS, SEO} from "../components";

const Post = () => {
    const { post } = useParams();
    const [markdown, setMarkdown] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(!markdown && !error){
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
    }

    return ( error ? <Error/> :
        markdown ? <div className='page blog'>
            <SEO description={blogpost.description} title={blogpost.title}/>
            <header style={{'backgroundImage': `url(${blogpost.image})`}}><h1>{blogpost.title}</h1></header>
            <main><ReactMarkdown source={markdown} escapeHtml={false}/></main>
        </div> : <Loading/>
    )
};

export default Post;