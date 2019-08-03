import React, { useRef, useState } from 'react';
import tick from './clock-tick.mp3';

export const ClockTick = () => {

  const [on, setOn] = useState(false);
  const toggle = () => setOn(flag => !flag);

  const ref = useRef(null);
  if (ref.current && on) {
    ref.current.src = tick;
    ref.current.play();
  }
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

