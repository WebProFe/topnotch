import React from 'react';
import { Container, Button } from 'reactstrap';
import './CallToAction.css'

const CallToAction = (props) => {
  return (
        <Container fluid className="call-to-action">
                <h2 className="content">{props.title}</h2>
                <p>{props.info}</p>
                <Button color="warning">{props.buttonTag}</Button>
        </Container>
  );
};

export default CallToAction;

