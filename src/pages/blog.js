import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import {useParams} from "react-router";
import '../blogs/team-document.md';

const Blog = () => {
    const { blog } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(()=>{

        if(!markdown){
            async function fetchBlog (){
                await fetch('https://raw.githubusercontent.com/p-lau/rhythm-game/master/src/blogs/team-document.md').then(r => {return r.text()}).then(text =>  setMarkdown(text));
            }
            fetchBlog().then(r => null);
        }
    }, [blog, markdown]);

    return (
        <Markdown source={markdown}/>
    )
};

export default Blog;