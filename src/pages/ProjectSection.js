import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useMediaQuery } from "@material-ui/core";

import facetime from "../images/facetime.jpg";
import AIDiagnosis from "../images/AIDiagnosis.png";
import payment from "../images/wallet.jpeg";
import appointment from "../images/appointment.png";
import reviews from "../images/rating.webp";
import maps from "../images/maps.jpeg";
import clouddb from "../images/clouddb.png";
import hospiyouweb from "../images/hospiyouweb.jpeg";
import errandzz from "../images/errandzz.jpeg";
import frontend from "../images/frontend.gif";
import luvleen from "../images/luvleen.jpeg";

const ProjectsContainer = styled.section`
  padding: 40px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ProjectCard = styled.div`
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  margin: 10px;
  justify-content: center;
`;

const ProjectsSection = () => {
  const visitPlayStore = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.hospiyou";
  };

  const visitSite = () => {
    window.location.href = "https://hospiyou.com";
  };

  // const visitAppleStore = () => {};

  return (
    <ProjectsContainer id="projects">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: 30,
          padding: "30px",
        }}
      >
        Some Interesting Projects
      </h2>
      <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
        Hospiyou Healthcare App
      </h2>
      <HospiyouProject />
      <div className="btn-container">
        <button className="btn" onClick={visitPlayStore}>
          Download Android
        </button>
        {/* <button className="btn" onClick={visitAppleStore}>
          Download iOS
        </button> */}
      </div>
      <div className="website">
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
          Hospiyou Website
        </h2>
        <HospiyouSite />
        <div className="btn-container">
          <button className="btn" onClick={visitSite}>
            View website
          </button>
        </div>
      </div>

      <div className="website">
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
          Errandzz Logistics App
        </h2>
        <ErrandzzProject />
        <div className="btn-container">
          <button className="btn" onClick={visitSite}>
            {/* View website */}
          </button>
        </div>
      </div>

      <div className="website">
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
          Diamond Save Software
        </h2>
        <DiamondSoftware />
        <div className="btn-container">
          <button className="btn" onClick={visitSite}>
            {/* View website */}
          </button>
        </div>
      </div>

      <div className="website">
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
          Luvleen Social App
        </h2>
        <LuvleenApp />
        <div className="btn-container">
          <button className="btn" onClick={visitSite}>
            {/* View website */}
          </button>
        </div>
      </div>

      <div className="website">
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: 25 }}>
          Some Other Projects
        </h2>
        <OtherApps />
        <div className="btn-container">
          <button className="btn" onClick={visitSite}>
            {/* View website */}
          </button>
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default ProjectsSection;

const HospiyouProject = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Media query for small screens (e.g., mobile devices)
  const smallScreenSettings = {
    ...settings,
    slidesToShow: 1, // Adjust the number of slides to show for small screens
  };

  // Media query for larger screens (e.g., desktops)
  const largeScreenSettings = {
    ...settings,
    slidesToShow: 5, // Adjust the number of slides to show for larger screens
  };

  const projects = [
    {
      id: 1,
      title: "AI Diagnosis",
      image: AIDiagnosis,
      width: "200px",
    },
    {
      id: 2,
      title: "Video & Voice Calling",
      image: facetime,
      width: "200px",
    },
    {
      id: 3,
      title: "Payment Gateway",
      image: payment,
      width: "200px",
    },
    {
      id: 4,
      title: "Google Map Integration",
      image: maps,
      width: "200px",
    },
    {
      id: 5,
      title: "Cloud Database",
      image: clouddb,
      width: "200px",
      height: "300px",
    },
    {
      id: 6,
      title: "Doctor Reviews",
      image: reviews,
      width: "200px",
    },
    {
      id: 7,
      title: "Appointment Booking",
      image: appointment,
      width: "200px",
    },
  ];

  return (
    <div className="slide-container">
      {isSmallScreen ? (
        <Slider {...smallScreenSettings}>
          <div></div>
          {projects.map((project) => (
            <ProjectContainer>
              <ProjectCard className="project-card">
                <div key={project.id} className="project-card-content">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <img
                    src={`${project.image}`}
                    alt="project"
                    style={{
                      width: project.width,
                    }}
                  />
                </div>
              </ProjectCard>
            </ProjectContainer>
          ))}
        </Slider>
      ) : (
        <Slider {...largeScreenSettings}>
          <div></div>
          {projects.map((project) => (
            <ProjectContainer>
              <ProjectCard className="project-card">
                <div key={project.id} className="project-card-content">
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <img
                    src={`${project.image}`}
                    alt="project"
                    style={{ width: project.width, height: project?.height }}
                  />
                </div>
              </ProjectCard>
            </ProjectContainer>
          ))}
        </Slider>
      )}
      <Slider {...settings}></Slider>
    </div>
  );
};

const HospiyouSite = () => {
  return (
    <div className="site-container">
      <div>
        <img src={hospiyouweb} className="webimage" alt="hospiyouwebimage" />
      </div>
      <div className="aboutproject">
        <h2>About Hospiyou:</h2>
        <text>
          Hospiyou is an AI-Powered Telemedical corporation that enables
          patients connect with doctors through video call, chat system, etc. It
          also provides AI-diagnostic test for patients to do a self examination
          of their current medical status before connecting them to doctors
        </text>
      </div>
    </div>
  );
};

const ErrandzzProject = () => {
  return (
    <div className="site-container">
      <div>
        <img src={errandzz} className="webimage" alt="errandzzimage" />
      </div>
      <div className="aboutproject">
        <h2>About Errandzz:</h2>
        <text>
          Errandzz is a logistics app that connects clients with randers in
          order to get their goods delivered to a location of choice.
        </text>
      </div>
    </div>
  );
};

const DiamondSoftware = () => {
  return (
    <div className="site-container">
      <div>
        <img src={payment} className="webimage" alt="errandzzimage" />
      </div>
      <div className="aboutproject">
        <h2>About Diamond Save:</h2>
        <text>
          This software program was designed to help it's users save money and
          track their expenses.
        </text>
      </div>
    </div>
  );
};

const LuvleenApp = () => {
  return (
    <div className="site-container">
      <div>
        <img src={luvleen} className="webimage" alt="errandzzimage" />
      </div>
      <div className="aboutproject">
        <h2>About Luvleen:</h2>
        <text>
          Luvleen creates an environment where users can communicate with one
          another, meet life partners, make new friends, etc hence discarding the barrier of distance
        </text>
      </div>
    </div>
  );
};

const OtherApps = () => {
  return (
    <div className="site-container">
      <div>
        <img src={frontend} className="otherapps" alt="otherapps" />
      </div>
      <div className="aboutproject">
        <h2>Some Others:</h2>
        <div style={{ marginBottom: "10px" }}>
          <text>Video Calling Server: Video calling software</text>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <text>HibridEx App: Buying and selling of digital currencies</text>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <text>
            PDF Converter: Converts pdf to audiobooks using python scripts
          </text>
        </div>
        {/* <div>
          <text>
            PDF Converter: Converts pdf to audiobooks uaing python scripts
          </text>
        </div> */}
      </div>
    </div>
  );
};
