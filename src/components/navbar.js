import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/"><b>Team 2/4</b></NavLink></li>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;