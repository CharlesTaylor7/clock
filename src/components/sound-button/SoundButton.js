import React from 'react'
import './SoundButton.css';
import soundEnabledIcon from './sound-enabled.svg'
import soundDisabledIcon from './sound-disabled.svg'

export const SoundButton = ({ soundOn, toggleSound }) => {

  const icon = soundOn ? soundEnabledIcon : soundDisabledIcon;

  return (
    <img
      className="sound-button"
      src={icon}
      onClick={toggleSound}
    />
  )
}