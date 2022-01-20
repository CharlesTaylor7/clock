import React from 'react';
import './App.css';
import { Clock } from '../clock/Clock';
import { useToggle } from '../../hooks/useToggle';
import { SoundButton } from '../sound-button/SoundButton';
import { IconAttribution } from '../icon-attribution/IconAttribution';
import { ViewSource } from '../view-source/ViewSource';


export const App = () => {
  const [soundOn, toggleSound] = useToggle(false);

  return (
    <div className="App">
      <SoundButton soundOn={soundOn} toggleSound={toggleSound} />
      <Clock soundOn={soundOn} />
      <footer>
        <div className="links"> 
          <ViewSource />
          <IconAttribution />
        </div> 
      </footer>
    </div>
  );
};
