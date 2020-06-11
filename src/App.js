import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link 
} from 'react-router-dom';
import Create from './Create';
import './App.css';

// let exampleObj = {
//   "SMO Any%": {
//     "splits": [
//       {"Cap": 181000},
//       {"Cascade": 360123}
//     ]
//   }
// }

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch status={false} runningTime={0} />
      </div>
      <Route exact path="/create" component={Create} />
    </Router>
  )
}

function Stopwatch() {
  const [status, setStatus] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  const [timer, setTimer] = useState(null);

  let handleReset = () => {
    clearInterval(timer);
    setRunningTime(0);
    setStatus(false);
  }

  let handleClick = () => {
    if (!status) {
      const startTime = Date.now() - runningTime;
      setTimer(setInterval(() => { setRunningTime(Date.now() - startTime) }));
      setStatus(true);
    } else {
      clearInterval(timer);
      setStatus(false);
    }
    return status;
  };

  function msToTime(s) {

    // Show to 2 or 3 digits, default is 2
    function digits(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return digits(hrs) + ':' + digits(mins) + ':' + digits(secs) + '.' + digits(ms, 3);
  }
  
  return (
    <div>
      <p>{msToTime(runningTime)}</p>
      <button onClick={() => handleClick()}>{status ? 'Stop' : 'Start'}</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
