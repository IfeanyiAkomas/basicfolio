import React from "react";
import styled from "styled-components";
import myphoto from "../images/myphoto.jpeg";
import { useMediaQuery } from "@material-ui/core";
import QuickAction from "./components/QuickAction";

const AboutContainer = styled.section`
  display: flex;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AboutSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed

  return (
    <div id="aboutsection">
      <QuickAction />
      <AboutContainer>
        <div className="site-container">
          <div>
            <img src={myphoto} className="about-img" alt="myphoto" />
          </div>
          <div className="aboutproject">
            {/* <h2>About me:</h2> */}
            <text
              style={{
                fontSize: isSmallScreen ? 16 : 20,
              }}
            >
              Hi! I'm Akomas Ifeanyi (AI), a passionate and innovative software
              developer with a proven track record of creating impactful mobile
              device applications and websites across a diverse range of
              industries. From healthcare to logistics, e-commerce to currency
              exchange, payment systems to social media, and beyond, I've had
              the privilege of crafting solutions that have left my clients
              thrilled and satisfied.
            </text>
          </div>
        </div>
      </AboutContainer>
    </div>
  );
};

export default AboutSection;
