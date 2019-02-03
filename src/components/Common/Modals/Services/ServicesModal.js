import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Framing from './Framing';
import Windows from './Windows';
import Decks from './Decks';
import Cornice from './Cornice';
import Renovations from './Renovations';
import Porches from './Porches';
  
class Services extends Component {
 
  render() {
 
    return (
      <Container fluid>
        <Row>
          <h2 className="title">Services</h2>
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