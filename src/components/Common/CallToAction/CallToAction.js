import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './CallToAction.css'

const CallToAction = (props) => {
  return (
        <Container fluid className="call-to-action">
                <h2 className="content">{props.title}</h2>
                <p>{props.info}</p>
                <Link to="/contact"><Button color="warning" onClick>{props.buttonTag}</Button></Link>
        </Container>
  );
};

export default CallToAction;

