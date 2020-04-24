import React from "react";
import {ParallaxBanner} from "react-scroll-parallax";
import '../styles/home.css'
import {SEO} from "../components";

const Home = () => {
    return (
        <div className="page home">
            <ParallaxBanner
                className={'splash'}
                layers={[
                    {
                        children: (<h1 style={{'textAlign':'center', 'marginTop':'40rem', 'textShadow':'0 0 1rem #000112'}}>Rhythm of the night</h1>),
                        amount: 0.6,
                    },
                    {
                        image: 'https://github.com/team2-4/2-4/blob/master/src/media/images/campfire/1.png?raw=true',
                        amount: 0.4,
                    },
                    {
                        image: 'https://github.com/team2-4/2-4/blob/master/src/media/images/campfire/2.png?raw=true',
                        amount: 0.2,
                        expanded: false
                    },
                    {
                        image: 'https://github.com/team2-4/2-4/blob/master/src/media/images/campfire/3.png?raw=true',
                        amount: 0,
                        expanded: false
                    },
                ]}
                style={{
                    height: '45rem',
                }}
            />
            <header><h1>Rhythm of the Night</h1></header>
            <main>
                <SEO title={'Home'} description={'A hack-n-bash rhythm game from Team 2/4, a group from IMGD4000/4500 course of WPI'}/>
                <div>
                    <h1>Alpha Release</h1>
                    <hr/>
                    <h2>Presentation</h2>
                    <iframe
                        title="Alpha Presentation"
                        src="https://docs.google.com/presentation/d/e/2PACX-1vRH6uhQqMhx5nACSC8pabbxqvGXw19YnnHyifheaaeLQGotm0AwdBXJH_Xwdu162Eb7KDpn58KlWHY0/embed?start=false&loop=false&delayms=3000"
                        frameBorder="0" width="100%" height="360" allowFullScreen="true" mozallowfullscreen="true"
                        webkitallowfullscreen="true"/>
                    <h2>Demo</h2>
                    <iframe
                        title="Alpha Demo"
                        width="100%" height="360" src="https://www.youtube-nocookie.com/embed/EKGr-U7v1xA"
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                    <a download className={'button'} href={"https://drive.google.com/open?id=1JaERjOnAkKfV_98YlqsZYzcsSwVM3IUY"}>Download the Alpha</a>

                    <p>Enjoy the game!</p>
                </div>
            </main>
        </div>
    )
};

export default Home;