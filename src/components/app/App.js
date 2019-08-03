import React from 'react';
import './App.css';
import { Clock } from '../clock/Clock';
import { useToggle } from '../../hooks/useToggle';
import { SoundButton } from '../sound-button/SoundButton';
import { IconAttribution } from '../icon-attribution/IconAttribution';
export const App = () => {
  const [soundOn, toggleSound] = useToggle(false);

  return (
    <div className="App">
      <SoundButton soundOn={soundOn} toggleSound={toggleSound} />
      <Clock soundOn={soundOn} />
      <IconAttribution />
    </div>
  );
};
