import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import chatbot from "../assets/projects/chatbot.png";
import weatherapp from "../assets/projects/weatherapp.png";
import slack from "../assets/projects/slack_clone.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="ChatBot"
              description="The chatbot project involves developing a responsive chatbot interface within a React application. The chatbot features guided questions with selectable options, where user interactions are handled seamlessly, sending selected options as user messages. The interface adapts to various device sizes, ensuring an optimal user experience across desktops, tablets, and mobile devices."
              ghLink="https://github.com/prince1565/Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="A Weather Web App project involves creating a responsive web application that provides users with real-time weather information based on their location or a searched city. The app typically includes features such as displaying current weather conditions (temperature, humidity, wind speed, etc.), a 5-day weather forecast, and location-based weather updates using APIs like OpenWeatherMap."
              ghLink="https://github.com/prince1565/wheatherapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slack}
              isBlog={false}
              title="Slack_ui_clone"
              description="A Slack UI clone website is a web application designed to replicate the look and feel of the popular communication platform, Slack. The site includes a user-friendly interface with elements such as a sidebar for navigating between channels, direct messages, and apps, along with a main chat area where conversations unfold. The clone is built with a focus on responsive design, ensuring a seamless experience across different devices, including desktops, tablets, and mobile phones."
              ghLink="https://github.com/prince1565/slack_ui_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects