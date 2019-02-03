import React, { Component } from 'react';
import './App.css';
import 'lightbox-react/style.css';
import NavMenu from './components/Navigation/NavMenu';
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavMenu />
        {/* <TransitionGroup>
              <CSSTransition 
                // key={}
                timeout={700}
                classNames='fade'
              > */}
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Footer/>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </div>
    </Router>
    );
  }
}

export default App;
