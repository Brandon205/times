import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Splits from './Splits';

export default function Times(props) { // Big component that does nearly everything in the app right now
    const [status, setStatus] = useState(false);
    const [runningTime, setRunningTime] = useState(0);
    const [timer, setTimer] = useState(null);
    const [selected, setSelected] = useState('');
  
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
    };
  
    function msToTime(s) {
  
      // Show to 2 or 3 digits, default of 2
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

    let options;
    if (localStorage.getItem('times')) {
        options = JSON.parse(localStorage.getItem('times'))
    }
    
    return (
      <div className="App">
        <Splits selectedTimer={selected} />
        <select name="timer" id="timer-select" onChange={(e) => setSelected(e.target.value)}>
            <option value="default">Select a timer</option>
            {options}
        </select><br/>
        <Link to="/create">Create a timer</Link>
        <h1>{msToTime(runningTime)}</h1>
        <button onClick={() => handleClick()}>{status ? 'Stop' : 'Start'}</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    );
}
