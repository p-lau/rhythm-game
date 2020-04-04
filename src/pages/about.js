import React from "react";
import {PROFILES} from "../components";
import '../styles/about.css';

const About = () => {
    return (
        <div className="page about">
            <header>
                <h1>About us</h1>
            </header>
            <main>
                {PROFILES.map((e, i)=>{
                    return(
                        <div className={'card'} key={i}>
                            <img src={e.image} alt={`${e.name}'s profile`}/>
                            <h1>{e.name}</h1>
                            <small>{e.text}</small>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export default About;