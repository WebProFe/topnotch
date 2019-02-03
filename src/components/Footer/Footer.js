import React from 'react';
import {Container, Row, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = (props) =>{
    return(
    <Container fluid className="footer">
        <Row className="footer-top">
                <div className="copyright">
                    <p>Copyright © 2019 Top Notch Corp <span className="footer__list__pipe">||</span> Designed By <span>Sitio Center</span> </p>
                </div>
        </Row>
        <Row className="footer-bottom">
                <div className="footer-list">
                    <Link to="/" className="footer-list-item"><NavLink className="footer-list-item-link">Home</NavLink></Link>
                    <p className="footer-pipe">|</p>
                    <Link to="/services" className="footer-list-item"><NavLink className="footer-list-item-link">Services</NavLink></Link>
                    <p className="footer-pipe">|</p>
                    <Link to="/contact" className="footer-list-item"><NavLink className="footer-list-item-link">Contact</NavLink></Link>       
                </div>
        </Row>
    </Container>
    ) 
}

export default Footer;