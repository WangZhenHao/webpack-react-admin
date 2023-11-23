import { useEffect } from 'react';

export function useWindowListener(eventType: keyof WindowEventMap, listener: EventListenerOrEventListenerObject) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
