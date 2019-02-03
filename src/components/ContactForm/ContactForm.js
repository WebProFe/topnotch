import React, { Component } from 'react';
import './ContactForm.css';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback, Row
} from 'reactstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${ this.state.email }`)
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <h2>Request A Quote</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
        <Row>
          <Col>
            <FormGroup>
              <Label for="examplePassword">First Name</Label>
              <Input
                type="text"
                name="fName"
                id="name"
                placeholder="First Name"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
                <Label for="exampleAddress">Last Name</Label>
                <Input type="text" name="lName" id="exampleAddress" placeholder="Last Name"/>
            </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col>
            <FormGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                Great your email was succesfully entered.
              </FormFeedback>
              <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
                <Label for="exampleText">Tell Us About Your Project</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
          <Button color="primary" className="submit">Submit</Button>
      </Form>
      </Container>
    );
  }
}

export default ContactForm;