import React from "react";
import {PROFILES, SEO} from "../components";
import '../styles/about.css';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="page about">

            <header>
                <h1>About us</h1>
            </header>
            <main>
                <SEO title={'Meet the group'} description={'The section about the Team 2/4 crew'}/>
                {PROFILES.map((e, i)=>{
                    return(!e.external ?
                        <Link className={'card'} key={i} to={e.link}>
                            <img src={e.image} alt={`${e.name}'s profile`}/>
                            <h1>{e.name}</h1>
                            <small>{e.text}</small>
                        </Link>
                            :
                        <a className={'card'} key={i} href={e.link}>
                            <img src={e.image} alt={`${e.name}'s profile`}/>
                            <h1>{e.name}</h1>
                            <small>{e.text}</small>
                        </a>
                    )
                })}
            </main>
        </div>
    )
};

export default About;