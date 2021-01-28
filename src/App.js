import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade'
import { theme } from "./themes/Theme";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import TitleMessage from "./components/title-message/title-message.component"
import MyCarousal from "./components/my-carousal/my-carousal.component";
import About from "./pages/about/about.component"
import {Parallax} from "react-parallax"
import Container from "react-bootstrap/Container"
import image1 from './assets/img/parallex/background.webp';
const App = () => {
  return( 
  <div className="App" style={{ position: "relative" }}> 
    <MyNavbar/>
    <MyCarousal/>
    <TitleMessage/>
    <div>
        <Parallax
          blur={{ min: -100, max: 100 }}
          bgImage={image1}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
  </div>
  );
};

export default App;
