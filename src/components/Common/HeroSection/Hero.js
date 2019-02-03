import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Hero.css'

const Hero = (props) => {
  return (
      <Jumbotron className="hero">
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">{props.subtitle}</p>
        </Container>
      </Jumbotron>
  );
};

export default Hero;

