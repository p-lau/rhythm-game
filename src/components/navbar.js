import React from 'react';
import {Link, NavLink} from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="bar">
            <main>
                <nav>
                    <ul>
                        <li><Link to="/" id={'brand'}>Team 2/4</Link></li>
                        <li><NavLink exact to="/" activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to="/blog" activeClassName='active'>Blog</NavLink></li>
                        <li><NavLink to="/about" activeClassName='active'>About</NavLink></li>
                    </ul>
                </nav>
            </main>
        </div>

    )
};

export default Navbar;