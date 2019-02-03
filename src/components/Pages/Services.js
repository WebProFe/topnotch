import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Container, Row} from 'reactstrap';
import ServicesModal from '../Common/Modals/Services/ServicesModal';
import Hero from '../Common/HeroSection/Hero'
import CallToAction from '../Common/CallToAction/CallToAction';

library.add(faSearch);

class Services extends Component {
    
  render() {
    return (
    <Container fluid>
        <Row>
            <Hero
                title="Transforming Austin"
                subtitle="One Project At A Time"
            />
        </Row>
        <Row>
            <ServicesModal/> 
        </Row>
        <Row>
            <CallToAction
                title="Need A Helping Hand With Your Project?"
                info="We are ready to start working on your project!"
                buttonTag="Get A Quote"
            />
        </Row>
    </Container>
    );
  }
}

export default Services;
