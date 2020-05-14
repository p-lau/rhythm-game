import React from "react";
import '../styles/footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={"footer"}>
            <main>
                <p><img src={'/media/images/inverted24.png'} alt={'logo'} width={'40'}/></p>
                <p>©2020 Team 2/4</p>
                <p>
                    Developed in React <FontAwesomeIcon icon={['fab', 'react']} />,
                    <a href={'https://github.com/team2-4/2-4'}> Stored in GitHub <FontAwesomeIcon icon={['fab', 'github']} /></a>,
                    Hosted on Netlify <img style={{'width':'1rem'}} src={'/media/images/netlify_darkmode.svg'} alt={'netlify gem'}/>
                </p>
            </main>
        </div>
    )
};

export default Footer;