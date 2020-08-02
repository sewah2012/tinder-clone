import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import Header from './Header';
import TinderCard from './TinderCard';

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Header />
        <TinderCard />
        <Switch>
          <Route exact path='/chat'> <h1> Chat Screen </h1> </Route>
          <Route exact path='/' component ={this} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
