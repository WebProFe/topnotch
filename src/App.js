import React from 'react';
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
