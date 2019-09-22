import React from 'react'
import './SoundButton.css';
import soundEnabledIcon from './sound-enabled.svg'
import soundDisabledIcon from './sound-disabled.svg'
import { connect } from 'react-redux'

const _SoundButton = ({ soundOn, dispatch }) => (
  <img
    className="sound-button"
    alt={"Toggle sound"}
    src={soundOn ? soundEnabledIcon : soundDisabledIcon}
    onClick={() => dispatch({ type: 'SET_SOUND', on: !soundOn })}
  />
)

const mapStateToProps = (state) => ({
  soundOn: state.soundOn
});

export const SoundButton = connect(
  mapStateToProps
)(_SoundButton);
