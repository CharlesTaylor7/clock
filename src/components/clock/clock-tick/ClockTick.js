import React, { useRef, useState, useEffect } from 'react';
import tickSound from './clock-tick.mp3';

export const ClockTick = ({ tickOnChange, on }) => {

  const ref = useRef(null);
  if (ref.current && !ref.current.src) {
    ref.current.src = tickSound;
  }

  useEffect(() => {
    if (ref.current && on) {
      ref.current.play()
    }
  // We don't want to tick immediately after the on button is pressed.
  // Otherwise, you can get a double-tick sound.
  // We want the ticking sound to be exclusively synced with the tickOnChange prop.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickOnChange])

  return (
    <>
      <audio
        id="player"
        ref={ref}
      />
    </>
  );
}

