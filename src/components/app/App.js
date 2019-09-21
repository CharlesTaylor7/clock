import React, { useEffect } from 'react';
import './App.css';
import { Clock } from '../clock/Clock';
import { SoundButton } from '../sound-button/SoundButton';
import { IconAttribution } from '../icon-attribution/IconAttribution';
import { connect } from 'react-redux';

const _App = ({ dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'REQUEST_TIME' });
  }, [dispatch]);

  return (
    <div className="App">
      <SoundButton />
      <Clock />
      <IconAttribution />
    </div>
  );
};

export const App = connect()(_App);
