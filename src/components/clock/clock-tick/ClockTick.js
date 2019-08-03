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

