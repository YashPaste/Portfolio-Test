import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile1.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";



// import FontAwesomeIcon  from '@fortawesome/fontawesome-free'

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile  justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="align-items-start p-3 my-details rounded">
               <div className="testing"> Hey there! I am<strong>&nbsp; Yash Balkrishna Paste&nbsp;😄</strong> </div>  
               <div className="content">         
               <br />A Frontend web devoloper and a Machine Learning Enthusiast.
                <br />
               I am currently pursuing by B.Tech in Metallurgical and Materials Engineering from National Institute of Technology, Tiruchirapalli [NITT]. I have completed my secondary education 
               from Kendriya Vidyalaya Ashok Nagar, Chennai.
               <br/>  
                
                I enjoy playing, watching and analysing cricket, reading mangas and watching anime.

                <br />I love exploring new technologies, to better understand the problems they solve and ways in which they can be used to build better and scalable products.
                <br /> <br />
                </div>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/136SElh9CVXN1MdHosjAV9EilJsxhNorN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/YashPaste" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/yash-balkrishna-paste-8b95a6189/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
