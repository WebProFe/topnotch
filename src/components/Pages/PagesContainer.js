import React, { Component } from 'react';
import 'lightbox-react/style.css';
import NavMenu from '../Navigation/NavMenu';
import Footer from "../Footer/Footer";
import Home from "./Home";
import Services from './Services';
import Contact from './Contact';
import './PagesContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from "react-router-dom";


class PagesContainer extends Component {
  render() {
    return (
        <Route render={({ location }) => (
          <div>
            <NavMenu />
            <TransitionGroup className="transition-group">
                <CSSTransition 
                  key= {location.key}
                  timeout= {{enter: 300, exit: 300}}
                  classNames= 'fade'
                >
                <Switch location={location} className="route-section">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
          </div>
           )} />
    );
  }
}

export default withRouter(PagesContainer);
