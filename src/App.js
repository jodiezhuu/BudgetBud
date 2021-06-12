import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Info />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
