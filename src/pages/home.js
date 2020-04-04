import React from "react";
import {ParallaxBanner} from "react-scroll-parallax";

const Home = () => {
    return (
        <div className="page home">
            <ParallaxBanner
                layers={[
                    {
                        image: 'https://github.com/team2-4/2-4/blob/master/src/media/images/campfire/0.png?raw=true',
                        amount: 1,
                    },
                    {
                        image: 'https://github.com/team2-4/2-4/blob/master/src/media/images/campfire/1.png?raw=true',
                        amount: 0.3,
                    },
                    {
                        children: (<h1 style={{'textAlign':'center', 'marginTop':'10rem'}}>Rhythm of the night</h1>),
                        amount: 0
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
                    height: '50vh',
                }}
            />
            <main>
            </main>
        </div>
    )
};

export default Home;