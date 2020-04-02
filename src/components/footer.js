import React from "react";
import '../styles/footer.css';
import logo from '../media/images/inverted24.png'

const Footer = () => {
    return (
        <div className={"footer"}>
            <section>
                <img src={logo} alt={'logo'} width={'40'}/>
            </section>
        <footer>
            <p>©2020 Team 2/4</p>
        </footer>
        </div>
    )
};

export default Footer;