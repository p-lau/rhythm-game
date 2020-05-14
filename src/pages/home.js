import React from "react";
import {ParallaxBanner} from "react-scroll-parallax";
import '../styles/home.css'
import {SEO} from "../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                        image: '/media/images/campfire/1.png',
                        amount: 0.4,
                    },
                    {
                        image: '/media/images/campfire/2.png',
                        amount: 0.2,
                        expanded: false
                    },
                    {
                        image: '/media/images/campfire/3.png',
                        amount: 0,
                        expanded: false
                    },
                ]}
                style={{
                    height: '80vh',
                }}
            />
            <header><h1>Rhythm of the Night</h1></header>
            <main>
                <SEO title={'Home'} description={'A hack-n-bash rhythm game from Team 2/4, a group from IMGD4000/4500 course of WPI'}/>
                <div>
                    <h1>Beta: Rhythm of the Night</h1>
                    <hr/>
                    <p> As the term draws to a close, we proudly present to you our game. Here is a gameplay demo.</p>
                    <iframe
                        title="beta presentation"
                        src="https://docs.google.com/presentation/d/e/2PACX-1vQFeoji5PuvTQTaUzPZTtCa3OEUzzLqddL_K6xXmV0gVxPeSJA_LNvvMGkd-8Poy5Kpav46ZMk9-h25/embed?start=false&loop=false&delayms=3000"
                        frameBorder="0"
                        width="100%"
                        height="450"
                        allowFullScreen={true}/>
                    <p> </p>
                    <iframe
                        title="beta demo"
                        width="100%"
                        height="450px"
                        src="https://www.youtube-nocookie.com/embed/XZYoxlmlmcs"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <a download className={'button'} href={"https://drive.google.com/open?id=1QUMmijrDiyOX1CGOGU1KWHCPCn2pJrOY"}>Download the Game<small>Windows <FontAwesomeIcon icon={['fab', 'windows']} /> only</small></a>
                    <p> </p>
                    <h2>Enjoy the game!</h2>
                    <p> </p>
                </div>
            </main>
        </div>
    )
};

export default Home;