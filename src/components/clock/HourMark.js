import React from 'react';

export const HourMark = (hour) => (
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