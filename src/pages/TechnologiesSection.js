import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useMediaQuery } from "@material-ui/core";

// technologies
import amplify from "../images/amplifylogo.png";
import chatgpt from "../images/chatgptlogo.png";
import express from "../images/expresslogo.png";
import firebase from "../images/firebaselogo.png";
import git from "../images/gitlogo.png";
import mongoDB from "../images/mongodblogo.jpeg";
import xcode from "../images/xcode.jpeg";
import androidstudio from "../images/androidstudio.jpeg";
import node from "../images/nodelogo.png";
import netlify from "../images/netlify.png";
import vercel from "../images/vercel.png";
import react from "../images/reactlogo.svg";

const TechnologiesContainer = styled.section`
padding: 40px;
justify-content: center;
align-items: center;
text-align: center;
background-image: radial-gradient(
  circle at bottom right,
  indigo,
  white,
  white,
  white
);
  `;
  

const TechnologyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const TechnologyCard = styled.div`
  &:hover {
    transform: scale(1.05);
  }
`;

const TechnologyTitle = styled.h3`
  margin: 10px;
  justify-content: center;
`;

const TechnologiesSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Media query for small screens (e.g., mobile devices)
  const smallScreenSettings = {
    ...settings,
    slidesToShow: 2, // Adjust the number of slides to show for small screens
  };

  // Media query for larger screens (e.g., desktops)
  const largeScreenSettings = {
    ...settings,
    slidesToShow: 7, // Adjust the number of slides to show for larger screens
  };

  const technologies = [
    {
      id: 1,
      title: "AWS Amplify",
      image: amplify,
      width: "100px",
    },
    {
      id: 11,
      title: "X Code",
      image: xcode,
      width: "100px",
    },
    {
      id: 32,
      title: "Android Studio",
      image: androidstudio,
      width: "100px",
    },
    {
      id: 2,
      title: "Firebase",
      image: firebase,
      width: "100px",
    },
    {
      id: 3,
      title: "Open AI",
      image: chatgpt,
      width: "100px",
    },
    {
      id: 4,
      title: "Git",
      image: git,
      width: "100px",
    },
    {
      id: 25,
      title: "Node",
      image: node,
      width: "100px",
    },
    {
      id: 16,
      title: "React Native",
      image: react,
      width: "120px",
    },
    {
      id: 22,
      title: "React",
      image: react,
      width: "120px",
    },
    {
      id: 53,
      title: "Netlify",
      image: netlify,
      width: "120px",
    },
    {
      id: 71,
      title: "Vercel",
      image: vercel,
      width: "120px",
    },
    {
      id: 8,
      title: "MongoDB",
      image: mongoDB,
      width: "170px",
    },
    {
      id: 9,
      title: "Express",
      image: express,
      width: "170px",
    },
  ];

  return (
    <TechnologiesContainer id="technologies" className="tech">
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: 30 }}>
        Work Technologies
      </h2>
      <div className="slide-container">
        {isSmallScreen ? (
          <Slider {...smallScreenSettings}>
            <div></div>
            {technologies.map((technology) => (
              <TechnologyCardContainer>
                <TechnologyCard className="technology-card">
                  <div key={technology.id} className="technology-card-content">
                    <img
                      src={`${technology.image}`}
                      alt="technology"
                      style={{ width: "70px" }}
                    />
                    <TechnologyTitle>{technology.title}</TechnologyTitle>
                  </div>
                </TechnologyCard>
              </TechnologyCardContainer>
            ))}
          </Slider>
        ) : (
          <Slider {...largeScreenSettings}>
            <div></div>
            {technologies.map((technology) => (
              <TechnologyCardContainer>
                <TechnologyCard className="technology-card">
                  <div key={technology.id} className="technology-card-content">
                    <img
                      src={`${technology.image}`}
                      alt="technology"
                      style={{ width: technology.width }}
                    />
                    <TechnologyTitle>{technology.title}</TechnologyTitle>
                  </div>
                </TechnologyCard>
              </TechnologyCardContainer>
            ))}
          </Slider>
        )}
      </div>
    </TechnologiesContainer>
  );
};

export default TechnologiesSection;
