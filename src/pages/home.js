import React from "react";
import {ParallaxBanner} from "react-scroll-parallax";
import '../styles/home.css'
import {SEO} from "../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMouse} from "@fortawesome/free-solid-svg-icons/faMouse";

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
                    height: '80vh',
                }}
            />
            <header><h1>Rhythm of the Night</h1></header>
            <main>
                <SEO title={'Home'} description={'A hack-n-bash rhythm game from Team 2/4, a group from IMGD4000/4500 course of WPI'}/>
                <div>
                    <h1>Playtesting</h1>
                    <hr/>
                    <h2>We're looking for people to test our game!</h2>
                    <h3>Directions:</h3>
                    <p>Download and extract the .zip file from the download link</p>
                    <p>Run the .exe file after extraction</p>
                    <p>Click [Play] to start the game</p>
                    <p>Defeat the snakes while attacking by the music's rhythm. A metronome displayed as a visual guide for the music rhythm</p>
                    <p>The game ends once the player clears three waves of enemy snakes or the tent's or character's health bar drops to 0 (displayed at the sides)</p>
                    <p>Press the Esc key to bring up the menu and click [Quit] to close and exit the game</p>
                    <h4>Controls:</h4>
                    <p>[Esc] to go to menu screen</p>
                    <p>[WASD] to move</p>
                    <p>[Left-mouse button]  to attack</p>
                    <p>[Spacebar] to attack</p>
                    <p>Move the cursor with the mouse <FontAwesomeIcon icon={faMouse} /></p>
                    <p>The character will face in the direction towards the cursor</p>

                    <a download className={'button'} href={"https://drive.google.com/open?id=1JaERjOnAkKfV_98YlqsZYzcsSwVM3IUY"}>Download the Game</a>
                    <a className={'button'} href={"https://forms.gle/P9trsCRfUKfkp3mT7"}>Take the survey</a>
                    <p>Currently for Windows <FontAwesomeIcon icon={['fab', 'windows']} /> only</p>
                    <p> </p>
                    <p>Enjoy the game!</p>
                    <p> </p>
                </div>
            </main>
        </div>
    )
};

export default Home;