// App.js
import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import TechnologiesSection from "./pages/TechnologiesSection";
import ProjectsSection from "./pages/ProjectSection";
import ServicesSection from "./pages/ServicesSection";
import image from "./images/mytoon.jpeg";
import gear from "./images/gear.gif";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal } from "@material-ui/core";
import AboutSection from "./pages/AboutSection";
import FooterSection from "./pages/FooterSection";

const AppWrapper = styled.div`
  overflow-x: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 10px auto 30px;
`;

// const Footer = styled.footer`
//   background-image: linear-gradient(to bottom right, black, black, indigo);
//   color: #fff;
//   padding: 20px;
//   text-align: center;
// `;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppWrapper>
      <div id="about" className="hero-section">
        <div className="header">
          <text className="name">AI</text>
          <div className="nav">
            <a href="#aboutsection">About</a>
            <a href="#services">Services</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="menu-icon" onClick={openModal}>
              &#9776;
            </button>
          </div>
        </div>
        <div className="below-nav">
          <Modal open={isOpen} onClose={closeModal}>
            <div className="modal-container">
              <button
                style={{
                  fontSize: 30,
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  alignSelf: "flex-end",
                }}
                onClick={closeModal}
              >
                X
              </button>
              <a className="modal-text" href="#aboutsection" onClick={closeModal}>
                About
              </a>
              <a className="modal-text" href="#services" onClick={closeModal}>
                Services
              </a>
              <a
                className="modal-text"
                href="#technologies"
                onClick={closeModal}
              >
                Technologies
              </a>
              <a className="modal-text" href="#projects" onClick={closeModal}>
                Projects
              </a>
              <a className="modal-text" href="#contact" onClick={closeModal}>
                Contact
              </a>
            </div>
          </Modal>

          <div>
            <img className="hero-img" src={image} alt="mytoon" />
          </div>
          <div className="title-area">
            <img src={gear} alt="rotating gear..." />
            <HeroTitle className="hero-title">
              I create world changing applications
            </HeroTitle>
            <HeroDescription className="hero-description">
              Let me help you get your ideas out to the world before someone
              else steals it!
            </HeroDescription>
          </div>
        </div>
      </div>
      <ServicesSection />
      <TechnologiesSection />
      {/* <ReviewsSection /> */}
      <ProjectsSection />
      <AboutSection />
      <FooterSection />
    </AppWrapper>
  );
};

export default App;
