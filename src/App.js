import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";
import { theme } from "./themes/Theme";
import Skills from "./pages/skills/skills.component";
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyTitleMessage from "./components/title-message/title-message.component"
import MyCarousal from "./components/my-carousal/my-carousal.component";
import About from "./pages/about/about.component"
import {Parallax} from "react-parallax"
import Container from "react-bootstrap/Container"
import image1 from './assets/img/parallex/background.webp';
import TimeLine from './components/project-timeline/project-timeline.component'
import ContactForm from './pages/contact-form/contact-form.component'
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./themes/particlesOptions";

const App = () => {
  return( 
    <div>
      <MyNavbar />
      <MyCarousal/>
      <MyTitleMessage/>
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
      <Container className="container-box rounded">
        <Slide left duration={1000}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine/>
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
