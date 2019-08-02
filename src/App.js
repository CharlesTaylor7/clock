import React from 'react';
import './App.css';

const HourMark = (hour) => (
  <line
    key={hour}
    transform={`rotate(${hour * 360 / 12}, 50, 50)`}
    x1="50"
    x2="50"
    y1="8"
    y2="15"
    stroke="black"
    strokeWidth="2"
  />
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <svg
        className="clock"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="white" />
        <circle cx="50" cy="50" r="2" stroke="black" />
        <line
          className="hour-hand"
          x1="50"
          x2="50"
          y1="20"
          y2="50"
          stroke="black"
          strokeWidth="2"
        />
        <line
          className="minute-hand"
          x1="50"
          x2="50"
          y1="20"
          y2="42.5"
          stroke="black"
          strokeWidth="2"
        />
        {[...Array(12).keys()].map(HourMark)}
      </svg>
    </header>
  </div>
);

export default App;
