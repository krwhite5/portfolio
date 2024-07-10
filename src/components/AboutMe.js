import React from 'react';
import './AboutMe.css';
import Image from 'react-bootstrap/Image';
import fakeProfile from './images/fakeProfile.jpg';
import './ImageShapes.css';

function AboutMe() {
  return(
    
      <div>
        <div class= "img-fluid">
        <Image src={fakeProfile} fluid></Image>
        </div>
          <p class="text-center pt-2">Hello! Welcome to my portfolio. I am a former first grade teacher who is transitioning into becoming a web developer
            I have a wonderful husband and a 90 pound white swiss sheppard. I enjoy cooking, reading, and spending time with family 
            and friends. 
          </p>
      </div>
  )
}

export default AboutMe