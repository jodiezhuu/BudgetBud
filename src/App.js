import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Info />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
