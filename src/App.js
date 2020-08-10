import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Header from './Header';
import TinderCard from './TinderCard';
import SwipeButton from './SwipeButton';
import ChatScreen from './ChatScreen';
import ChatMessage from './ChatMessage';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>
        <Route exact path='/chat/:person'>
            <Header backButton = '/chat'/>
            <ChatMessage />          
          </Route>

          <Route exact path='/chat'>
            <Header backButton = '/'/>
            <ChatScreen />             
          </Route>

          <Route exact path='/'>
            <Header  />
            <TinderCard />
            <SwipeButton />
          </Route>
 
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
