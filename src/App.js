import React, { useState, useEffect } from 'react';
import * as Rx from 'rxjs/operators';
import * as Observable from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import './App.css';
import tick from './clock-tick.mp3';
import Sound from 'react-sound';

const TickSound = ({ on }) => (
  <Sound
    url={tick}
    playStatus={"PLAYING"}
  />
);

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

const date = new Date();
const App = () => {
  const [now, setNow] = useState(date);
  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const minuteHandPercentage = (minutes + (seconds / 60)) / 60;
  const hourHandPercentage = (hours + minuteHandPercentage) / 12;

  const rotate = percentage => `rotate(${360 * percentage}, 50, 50)`;
  return (
    <div className="App">
      <header className="App-header">
        <TickSound on={now} />
        <svg
          className="clock"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="white" />
          <circle cx="50" cy="50" r="2" stroke="black" />
          <line
            className="hour-hand"
            transform={rotate(hourHandPercentage)}
            x1="50"
            x2="50"
            y1="20"
            y2="50"
            stroke="black"
            strokeWidth="2"
          />
          <line
            className="minute-hand"
            transform={rotate(minuteHandPercentage)}
            x1="50"
            x2="50"
            y1="27.5"
            y2="50"
            stroke="black"
            strokeWidth="2"
          />
          {[...Array(12).keys()].map(HourMark)}
        </svg>
      </header>
    </div>
  );
};

export default App;
