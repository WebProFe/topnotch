import React from 'react';
import { Container } from 'reactstrap';
import './CallToAction.css'

const CallToAction = (props) => {
  return (
        <Container fluid className="call-to-action">
                <h2 className="content">{props.title}</h2>
                <p>{props.info}</p>
        </Container>
  );
};

export default CallToAction;

