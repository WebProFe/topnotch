import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Col, Row, Form,
  FormGroup, Label, Input,
  Button
} from 'reactstrap';
import './ContactForm.css';

Modal.setAppElement('div');



class ContactForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
          first_name: '',
          nameError: '',
          last_name: '',
          lastNameError: '',
          email: '',
          emailError: '',
          phone: '',
          phoneError: '',
          city: '',
          state: '',
          desc: '',
          descError: '',

          resData:'',

          modalIsOpen: false


    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

closeModal = () => {
  this.setState({
      modalIsOpen: false
  });
}

  submitHandler(e) { 
    e.preventDefault();

      if (this.state.first_name === '') {
        this.setState({
            nameError: 'Please provide your name' 
        })
        } else {
            this.setState({
              nameError: ''
            })
        }
      if (this.state.last_name === '') {
        this.setState({
            lastNameError: 'Please provide your last name' 
        })
        } else {
            this.setState({
              lastNameError: ''
            })
        }
       if (this.state.phone === '') {
        this.setState({
            phoneError: 'Please provide a number where we can reach you' 
        })
        }
         else {
            this.setState({
              phoneError: ''
            })
        } 
      if (this.state.email === '') {
          this.setState({
              emailError: 'Please provide an email address'
          })
      } else if (this.state.email === /^((?!@).)*$/ || this.state.email.indexOf('.') === -1) {
          this.setState({
              emailError: 'Please provide a valid email address'
          })
      } else {
          this.setState({
              emailError: ''
          })
      }
      if (this.state.desc === '') {
          this.setState({
              descError: 'Please leave a message'
          })
      } else {
          this.setState({
              descError: ''
          })
      }

      setTimeout(() => {
        if (this.state.nameError === '' && this.state.lastNameError === '' && this.state.phoneError === ''&& this.state.descError === ''&& this.state.emailError === '') {  
          axios({
                method:'post',
                url:'/',
                data: { 
                  first_name : this.state.first_name,
                  last_name : this.state.last_name,
                  email : this.state.email,
                  phone : this.state.phone,
                  city : this.state.city,
                  state: this.state.state,
                  desc : this.state.desc
                },
                responseType:'json',
                headers: {
                          'content-type': 'application/json','Access-Control-Allow-Origin': '*'
                          }
                })
                .catch(function (error) {
                    console.log(error);
                    console.log("It got right into catch and skipped then")
                })
                .then( response => {
                    this.setState({
                        resData: response
                    });

                    this.setState({
                        modalIsOpen: true 
                    });

                    this.setState({
                      last_name: '',
                      first_name: '',
                      phone: '',
                      desc: '',
                      city:'',
                      state:'',
                      email:''                
                    })

                })
        } else {
            this.setState({
                resData: 'Oops! Something went wrong!'
            });
        }
    }, 10);
  }


  render() {
    const { first_name, last_name, email, phone, state, city, desc, nameError, lastNameError, phoneError, descError, emailError, modalIsOpen } = this.state;
    return (
      <Container fluid className="form-container">
        <h2>Request A Quote</h2>
        <Form className="form" id="contact-form" onSubmit={this.submitHandler}>
            <FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name-input">First Name</Label>
                    <Input 
                      type="text" 
                      name="first_name" 
                      id="first_name-input" 
                      value={first_name} 
                      onChange={this.changeHandler} 
                      style={{ margin: `${nameError.length > 0 ? "0" : ''}` }}
                    />
                    <p className="form-error" name="nameError">{nameError}</p>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="last_name-input">Last Name</Label>
                    <Input 
                      type="text" 
                      name="last_name" 
                      id="last_name-input" 
                      value={last_name} 
                      onChange={this.changeHandler}
                      style={{ margin: `${lastNameError.length > 0 ? "0" : ''}` }}
                    />
                    <p className="form-error" name="lastNameError">{lastNameError}</p>                  
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email-input">Email</Label>
                    <Input 
                      type="email" 
                      name="email" 
                      id="email-input" 
                      value={email} 
                      onChange={this.changeHandler}
                      style={{ margin: `${emailError.length > 0 ? "0" : ''}` }}
                    />
                    <p className="form-error" name="emailError">{emailError}</p>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="phone-input">Contact Number</Label>
                    <Input 
                      type="tel" 
                      name="phone" 
                      id="phone-input" 
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required = "false"                   
                      placeholder="Use this pattern : 555-555-5555"
                      autoComplete="tel-national" 
                      value={phone} 
                      onChange={this.changeHandler} 
                      style={{ margin: `${phoneError.length > 0 ? "0" : ''}` }}
                    />
                    <p className="form-error" name="phoneError">{phoneError}</p>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city-input">City</Label>
                    <Input 
                      type="text" 
                      name="city" 
                      id="city-input" 
                      value={city} 
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="state-input">State</Label>
                    <Input 
                      type="text" 
                      name="state" 
                      id="state-input" 
                      value={state} 
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                <FormGroup>
                  <Label for="description-input">Tell Us About Your Project</Label>
                  <Input 
                    type="textarea" 
                    name="desc" 
                    id="description-input" 
                    value={desc} 
                    onChange={this.changeHandler}
                    style={{ margin: `${descError.length > 0 ? "0" : ''}` }}
                  />
                  <p className="form-error" name="descError">{descError}</p>
                </FormGroup>
                </Col>
              </Row>
            </FormGroup>
            <Row className="button-container">
              <Button>Submit</Button>
            </Row>
      </Form>
      <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    closeTimeoutMS={150}
                    overlayClassName="formOverlay"
                    className="customStyles"
                >
                    <div className="modalHeader-container">
                        <span className="modalHeader-container__text">Your message was sent!</span>
                        <FontAwesomeIcon icon="window-close" className="close-icon" aria-hidden="true" onClick={this.closeModal}/>
                    </div>

                    <div className="modal-body">
                        <p className="modal-body__text">{first_name}</p>
                        <p>I'll be in touch with you soon.</p>
                    </div>

                    <Button className="modal-button" onClick={this.closeModal}>Close</Button>
                </Modal>
      </Container>


      
    );
  }
}

export default ContactForm;