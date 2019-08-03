import React, { useState, useEffect } from 'react';
import './Clock.css';
import { ClockTick } from './clock-tick/ClockTick';
import { HourMark } from './HourMark';

export const Clock = ({ soundOn }) => {
  const [numTicks, setNumTicks] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumTicks(tick => tick + 1);
    }, 1000);
  }, []);

  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const minuteHandPercentage = (minutes + (seconds / 60)) / 60;
  const hourHandPercentage = (hours + minuteHandPercentage) / 12;

  const rotate = percentage => `rotate(${360 * percentage}, 50, 50)`;
  return (<>
    <ClockTick tickOnChange={now} on={soundOn} />
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
        y1="27.5"
        y2="50"
        stroke="black"
        strokeWidth="2"
      />
      <line
        className="minute-hand"
        transform={rotate(minuteHandPercentage)}
        x1="50"
        x2="50"
        y1="20"
        y2="50"
        stroke="black"
        strokeWidth="2"
      />
      {[...Array(12).keys()].map(HourMark)}
    </svg>
  </>);
};



