import React from 'react';
import {Container, Col, Row, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Testimonial.css";
import TestimonialImage from "../../../images/testimonial1.png"


const Testimonial = (props) =>{
    return(
    <Container fluid>
        <Row className="testimonial-container">
            <Col>
                <Card className="card">
                    <Container className="content">
                        <div className="testimonial-quote">
                            <FontAwesomeIcon icon="quote-left"/>
                        </div>
                        <div className="testimonial-review">
                            <p>{props.testimonial}</p>
                        </div>
                    </Container>
                    <Container className="author">
                        <div className="testimonial-image">
                            <img className="" src={TestimonialImage} alt="log"/>
                        </div>
                        <div className="testimonial-author">
                            <h2>{props.testimonialAuthor} <br/><span>{props.testimonialCompany}</span></h2>
                        </div>
                        
                    </Container>
                </Card>
            </Col>
        </Row>
    </Container>
    ) 
}

export default Testimonial;