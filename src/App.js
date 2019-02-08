import React from 'react';
// import 'lightbox-react/style.css';
// import NavMenu from './components/Navigation/NavMenu';
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Pages/Home";
// import Services from './components/Pages/Services';
// import Contact from './components/Pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import PagesContainer from './components/Pages/PagesContainer';



const App = () => (
  <Router>
    <div>
      <PagesContainer />
    </div>
  </Router>
);

export default App;
