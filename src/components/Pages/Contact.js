import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Container, Row} from 'reactstrap';
import Hero from '../Common/HeroSection/Hero'
import ThankYou from '../Common/CallToAction/ThankYou';
import ContactForm from '../ContactForm/ContactForm';
library.add(faSearch);

class Services extends Component {
    
  render() {
    return (
    <Container fluid>
        <Row>
            <Hero
                title="Contact Us"
                subtitle="We Guarantee Our Work!"
            />
        </Row>
        <Row>
            <ContactForm />
        </Row>
        <Row>
            <ThankYou
                title="Thank You For Visiting Our Website"
                info="We Will Do Our Best to Give You a Quick Response"
            />
        </Row>
    </Container>
    );
  }
}

export default Services;
