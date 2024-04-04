import React from "react";
import myphoto from '../images/myphoto.jpeg'

const AboutSection = () => {
  return (
    <div className="site-container">
      <div>
        <img src={myphoto} className="hero-img" alt="myphoto" />
      </div>
      <div className="aboutproject">
        <h2>About me:</h2>
        <text>
          Hi, I'm Akomas Ifeanyi (AI) 
        </text>
      </div>
    </div>
  );
};

export default AboutSection;
