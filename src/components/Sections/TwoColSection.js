import React from 'react';
import {Container, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Sections.css";
import SectionImage from "../../images/section-image.png"

const TwoCols = (props) =>{
    return(
    <Container>
        <Row className="two-col">
            <Col className="col" xs="12" sm="6" md="8">
                <h2>Offering Only the Best Quality Carptentry Services</h2>
                <p>We are certified windows and doors installers. We work on all kinds of cornice work, decks, patio renovation. We especialize in setting custom windows and doors. We do all kinds of wood and hardie siding, and we are insured and OSHA approved. </p>
                <Link to="/services"><Button color="warning">Our Services</Button></Link>
            </Col>
            <Col className="col" xs="12" sm="6" md="4">
                <img className="two-col-image" src={SectionImage} alt="log"/>
            </Col>
        </Row>
    </Container>
    ) 
}

export default TwoCols;