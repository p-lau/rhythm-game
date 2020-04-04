import React from "react";
import {ParallaxBanner} from "react-scroll-parallax";
import '../styles/home.css'

const Home = () => {
    return (
        <div className="page">
            <ParallaxBanner
                className={'home'}
                layers={[
                    {
                        children: (<h1 style={{'textAlign':'center', 'marginTop':'45rem'}}>Rhythm of the night</h1>),
                        amount: 0.8,
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
                    height: '50rem',
                }}
            />
            <main>
            </main>
        </div>
    )
};

export default Home;