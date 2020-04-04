import React from 'react';
import {Navbar, Page, Footer} from './components';
import './styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {ParallaxProvider} from "react-scroll-parallax";

library.add(fab, faCheckSquare, faCoffee);


const App = () => {
  return (
    <ParallaxProvider>
      <Navbar/>
      <Page/>
      <Footer/>
    </ParallaxProvider>
  );
};

export default App;