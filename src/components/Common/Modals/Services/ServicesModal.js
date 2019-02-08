import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Framing from './Framing';
import Windows from './Windows';
import Decks from './Decks';
import Cornice from './Cornice';
import Renovations from './Renovations';
import Porches from './Porches';
import { tooSmall, tooBig } from '../../../../images'
  
class Services extends Component {
 
  render() {
 
    return (
      <Container fluid>
        <Row className="title">
          <h2>Services</h2>
          <p>No job is too small or too big for us, we offer the same Top Notch quality on all projects.</p>
            <Col className="projects">
                <img src={tooSmall} alt="project"/>
            </Col >
            <Col className="projects">
                <img src={tooBig} alt="project"/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Framing/>
            </Col>
            <Col>
                <Windows/>
            </Col>
            <Col>
                <Renovations/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Decks/>
            </Col>
            <Col>
                <Cornice/>
            </Col>
            <Col>
                <Porches/>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Services;