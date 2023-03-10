import { useEffect, useRef } from 'react';

type TimerHandler = () => void;
type TDelay = number | null;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: TimerHandler, delay: TDelay) => {
  const savedCallback = useRef<TimerHandler>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
