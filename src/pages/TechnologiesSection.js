import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useMediaQuery } from "@material-ui/core";

// technologies
import amplify from "../images/amplifylogo.jpeg";
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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };

  // Media query for small screens (e.g., mobile devices)
  const smallScreenSettings = {
    ...settings,
    slidesToShow: 4, // Adjust the number of slides to show for small screens
  };

  // Media query for larger screens (e.g., desktops)
  const largeScreenSettings = {
    ...settings,
    slidesToShow: 10, // Adjust the number of slides to show for larger screens
  };

  const technologies = [
    {
      id: 1,
      title: "AWS Amplify",
      image: amplify,
      width: "50px",
    },
    {
      id: 11,
      title: "X Code",
      image: xcode,
      width: "50px",
    },
    {
      id: 32,
      title: "Android Studio",
      image: androidstudio,
      width: "50px",
    },
    {
      id: 2,
      title: "Firebase",
      image: firebase,
      width: "50px",
    },
    {
      id: 3,
      title: "Open AI",
      image: chatgpt,
      width: "50px",
    },
    {
      id: 4,
      title: "Git",
      image: git,
      width: "50px",
    },
    {
      id: 25,
      title: "Node",
      image: node,
      width: "50px",
    },
    {
      id: 16,
      title: "React Native",
      image: react,
      width: "70px",
    },
    {
      id: 22,
      title: "React",
      image: react,
      width: "70px",
    },
    {
      id: 53,
      title: "Netlify",
      image: netlify,
      width: "70px",
    },
    {
      id: 71,
      title: "Vercel",
      image: vercel,
      width: "70px",
    },
    {
      id: 8,
      title: "MongoDB",
      image: mongoDB,
      width: "120px",
      imgwdt: "60px",
    },
    {
      id: 9,
      title: "Express",
      image: express,
      width: "120px",
      imgwdt: "70px",
    },
  ];

  return (
    <>
      <TechnologiesContainer id="technologies">
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: 30 }}>
          Work Technologies
        </h2>
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
                      style={{
                        width: technology?.imgwdt || "40px",
                        alignSelf: "center",
                      }}
                    />
                    <h5>{technology.title}</h5>
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
                      style={{ width: technology.width, alignSelf: "center" }}
                    />
                    <TechnologyTitle>{technology.title}</TechnologyTitle>
                  </div>
                </TechnologyCard>
              </TechnologyCardContainer>
            ))}
          </Slider>
        )}
      </TechnologiesContainer>
      <div className="site-container">
        <text>
          AWS Amplify, X Code, Android Studio, Firebase, Open AI, Git, Node,
          HTML, CSS, Tailwind, JavaScript, React Native, React, Netlify, Vercel,
          MongoDB, Express, etc
        </text>
      </div>
    </>
  );
};

export default TechnologiesSection;
