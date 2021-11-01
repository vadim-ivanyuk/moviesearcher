import { useState, useRef } from 'react';

export const useInput = (initial = '') => {
  const [value, setValue] = useState(initial);
  const isFirstRender = useRef(true);

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);

      isFirstRender.current = false;
    },
    reset: () => {
      setValue('');
    },
    isFirstRender,
  };
};
