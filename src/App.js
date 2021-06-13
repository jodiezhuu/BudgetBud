import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Info from './components/Info';
import Savings from './components/Savings';
import Expenditures from './components/Expenditures';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    /**react router dom works for switching pages but for scrolling react-scroll can be used instead */
    <Router>
      <Navbar />
      <Intro /> 
      <Info />
      <Savings />
      <Expenditures />
    </Router>
  );
}

export default App;
