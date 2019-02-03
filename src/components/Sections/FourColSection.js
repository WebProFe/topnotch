import React from 'react';
import {Container, Col, Row, Button } from 'reactstrap';
import "./Sections.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourCols = (props) =>{
    return(
    <Container fluid className="four-col">
        <Row className="col-title">
            <Col>
                <h2>WHY CHOOSE TOP NOTCH</h2>
            </Col>
        </Row>
        <Row>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="leaf" color="#282120" size="3x" />
                <h4>WE DELIVER QUALITY</h4>
                <p>Our quality is backed and guaranteed</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="calendar" color="#282120" size="3x"/>
                <h4>ALWAYS ON TIME</h4>
                <p>On time, every time</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="users" color="#282120" size="3x"/>
                <h4>WE ARE PASSIONATE</h4>
                <p>We work hard to deliver</p>
            </Col>
            <Col className="col-4" xs="6" sm="6" md="3">
                <FontAwesomeIcon icon="cog" color="#282120" size="3x"/>
                <h4>PROFESSIONAL NOTCH WORK</h4>
                <p>Top Notch work. Satisfaction Guaranteed!!</p>
            </Col>
        </Row>
        <Row className="col-button">
            <Col>
                <Button color="warning">Our Services</Button>
            </Col>
        </Row>
    </Container>
    ) 
}

export default FourCols;