import React from 'react';
import {Link, NavLink} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" id={'brand'}>Team 2/4</Link></li>
                <li><NavLink to="/home" activeClassName='active'>Home</NavLink></li>
                <li><NavLink to="/blogs" activeClassName='active'>Blogs</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>About</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;