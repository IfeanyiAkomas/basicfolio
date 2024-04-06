import React from "react";
import styled, { keyframes } from 'styled-components';
import AI from "../images/ai.gif";
import api from "../images/api.gif";
import sdk from "../images/sdk.gif";
import cloud from "../images/cloud.gif";
import backend from "../images/backend.gif";
import frontend from "../images/frontend.gif";
import mobile from "../images/mobile.gif";
import website from "../images/website.gif";

const ServicesContainer = styled.section`
  padding: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ServicesCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 80%;
  height: 300px;
  max-width: 400px;
  margin: 10px;

  &:nth-child(odd) {
    animation: ${slideFromLeft} 1.0s ease-in-out;
  }

  &:nth-child(even) {
    animation: ${slideFromRight} 1.0s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceCardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  margin: 0;
`;

const ServiceDescription = styled.p`
  margin: 10px 0;
`;

const ServicesSection = () => {

  const services = [
    {
      title: "Mobile App Development",
      description: "I offer custom mobile app development tailored to your needs. Get intuitive interfaces and smooth performance.",
      image: mobile,
      width: "100px"
    },
    {
      title: "Web App Development",
      description: "I create web apps that empower your online presence. From e-commerce to dashboards, I bring your vision to life.",
      image: website,
      width: "100px"
    },
    {
      title: "Cloud Computing",
      description: "I leverage cloud infrastructure to propel your business forward. Optimize resources, enhance security, and scale effortlessly.",
      image: cloud,
      width: "100px"
    },
    {
      title: "Frontend Engineering",
      description: "I craft visually stunning user interfaces that captivate your audience. From sleek designs to seamless interactions.",
      image: frontend,
      width: "100px"
    },
    {
      title: "Backend Engineering",
      description: "I take control of your backend infrastructure. Ensure scalability, security, and performance.",
      image: backend,
      width: "100px"
    },
    {
      title: "API Integrations",
      description: "I enhance your app's functionality by seamlessly integrating with third-party APIs. Streamline processes and unlock new features.",
      image: api,
      width: "100px"
    },
    {
      title: "SDK Integration",
      description: "I accelerate development cycles with seamless SDK integration. Access powerful tools and resources.",
      image: sdk,
      width: "100px"
    },
    {
      title: "AI Automation",
      description: "I transform your applications with AI automation. From predictive analytics to personalized experiences.",
      image: AI,
      width: "100px"
    },
  ];
  

  return (
    <ServicesContainer id="services">
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: 30 }}>
        Services
      </h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServicesCardContainer className="service-card">
            <ServiceCard key={index}>
              <ServiceCardContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <img
                    src={`${service.image}`}
                    alt="project"
                    style={{ width: service.width, borderRadius: '50%', height: service.width }}
                  />
              </ServiceCardContent>
            </ServiceCard>
          </ServicesCardContainer>
        ))}
      </div>
    </ServicesContainer>
  );
};

export default ServicesSection;
