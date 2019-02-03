import React from 'react';
import "./Sections.css";
import { Container, Row, Col } from "reactstrap";
import Testimonial from '../Common/Testimonial/Testimonial';

const Testimonials = (props) =>{
    return(
    <Container fluid className="testimonials">
        <Row className="testimonials-title">
            <Col>
                <h2>Customer Reviews</h2>
            </Col>
        </Row>
        <Row >
            <Col className="col-4" xs="12" sm="6" md="4">
                <Testimonial 
                    testimonial="Best company I have done business with"
                    testimonialAuthor="Fernando Medina"
                    testimonialCompany="Field Of Dreams"
                />
            </Col>
            <Col className="col-4" xs="12" sm="6" md="4">
                <Testimonial
                    testimonial="No one more capable than them to do the hard work"
                    testimonialAuthor="Anahi Guzman"
                    testimonialCompany="Amayas"
                />
            </Col>
            <Col className="col-4" xs="12" sm="6" md="4">
                <Testimonial
                    testimonial="Professional work, highly recommended"
                    testimonialAuthor="Luis Ramirez"
                    testimonialCompany="Satisfied Customer"                
                />
            </Col>
        </Row>
    </Container>
    ) 
}

export default Testimonials;