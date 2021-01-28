import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect'


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 2000;
    letter-spacing: 7px;
   
    .main {
      font-size: 90px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .sub {
        font-style: oblique;
      font-size: 29px;
    }
  }
`;



const TitleMessage = () => {
    return (
        <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
        <strong>Yash Paste</strong>
          <br />
        </div>
        <div className="sub">
          <Typewriter
            options={{
                
              strings: ["I am a Frontend Developer.", "I enjoy swimming.", "I am a foody :D"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
    )
}

export default TitleMessage
