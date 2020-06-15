import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Create from './Create';
import Times from './Times';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path="/create" component={Create} />
      <Route exact path="/timer" render={ () => <Times status={false} runningTime={0} /> } />
    </Router>
  )
}
