import React from 'react';
export default function useTimeout(callback: Function, delay: number) {
  const timeoutRef = React.useRef<any>(null);
  const savedCallback = React.useRef<Function>(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window?.setTimeout(tick, delay);
      return () => window?.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
}
