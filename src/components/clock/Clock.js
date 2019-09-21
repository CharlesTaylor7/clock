import React from 'react';
import './Clock.css';
import { HourMark } from './HourMark';
import { connect } from 'react-redux';

const _Clock = ({ time }) => {
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const minuteHandPercentage = (minutes + (seconds / 60)) / 60;
  const hourHandPercentage = (hours + minuteHandPercentage) / 12;

  const rotate = percentage => `rotate(${360 * percentage}, 50, 50)`;
  return (
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
  );
};

const mapStateToProps = (state) => ({
  soundOn: state.soundOn,
  time: state.time,
});

export const Clock = connect(mapStateToProps)(_Clock);
