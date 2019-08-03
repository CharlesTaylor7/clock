import { useState } from 'react';

export const useToggle = initial => {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(flag => !flag);

  return [on, toggle];
}