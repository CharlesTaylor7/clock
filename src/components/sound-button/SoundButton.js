import React from 'react'
import './SoundButton.css';
import soundEnabledIcon from './sound-enabled.svg'
import soundDisabledIcon from './sound-disabled.svg'
import { connect } from 'react-redux'

const _SoundButton = ({ soundOn, dispatch }) => {

  const toggleSound = () =>
    dispatch({ type: 'SET_SOUND', on: !soundOn });

  const icon = soundOn ? soundEnabledIcon : soundDisabledIcon;

  return (
    <img
      className="sound-button"
      src={icon}
      onClick={toggleSound}
    />
  )
}

const mapStateToProps = (state) => ({
  soundOn: state.soundOn
});

export const SoundButton = connect(
  mapStateToProps
)(_SoundButton);
