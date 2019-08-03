import React, { useRef, useState, useEffect } from 'react';
import tick from './clock-tick.mp3';

export const ClockTick = ({ tickOnChange }) => {

  const [on, setOn] = useState(false);
  const toggle = () => setOn(flag => !flag);

  const ref = useRef(null);
  if (ref.current) {
    ref.current.src = tick;
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
      <button
        id="ok"
        onClick={() => toggle()}
      >
        {on ? 'Disable Sound' : 'Enable Sound'}
      </button>
    </>
  );
}

