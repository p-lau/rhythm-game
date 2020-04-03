import React from "react";
import '../styles/footer.css';
import logo from '../media/images/inverted24.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import netlify from '../media/images/netlify_darkmode.svg'

const Footer = () => {
    return (
        <div className={"footer"}>
            <main>
                <p><img src={logo} alt={'logo'} width={'40'}/></p>
                <p>©2020 Team 2/4</p>
                <p>
                    Developed in React <FontAwesomeIcon icon={['fab', 'react']} />,
                    <a href={'https://github.com/team2-4/2-4'}> Stored in GitHub <FontAwesomeIcon icon={['fab', 'github']} /></a>,
                    Hosted on Netlify <img style={{'width':'1rem'}} src={netlify} alt={'netlify gem'}/>
                </p>
            </main>
        </div>
    )
};

export default Footer;