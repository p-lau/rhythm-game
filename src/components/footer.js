import React from "react";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"><b>Team 2/4</b></NavLink></li>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
};

export default Footer;