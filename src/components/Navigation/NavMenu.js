import React from 'react';
import "./NavMenu.css";
import logo from "../../images/topNotchLogo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar className="navigation"  dark expand="md">
          <NavbarBrand className="company-name" href="/"><img className="logo" src={logo} alt=""/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto"  navbar onClick={this.toggle}>
              <NavItem>
                <Link to="/"><NavLink className="navigation">Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/services"><NavLink className="navigation">Services</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contact"><NavLink className="navigation">Contact</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
