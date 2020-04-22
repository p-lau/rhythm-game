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
                <h1>Alpha Release</h1>
                <p>Enjoy the game!</p>
                <a download className={'button'} href={"https://drive.google.com/open?id=1JaERjOnAkKfV_98YlqsZYzcsSwVM3IUY"}>Download</a>
                <a className={"button"} href={"https://docs.google.com/presentation/d/1D_J4EvH2JdCv9HRu4FSRkvJzQSQqw8uqj_JtRzRrw0o/edit?usp=sharing"}>Presentation</a>
            </main>
        </div>
    )
};

export default Home;