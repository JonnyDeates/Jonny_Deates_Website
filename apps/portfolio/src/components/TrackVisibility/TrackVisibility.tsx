import * as React from 'react';
import {ReactNode, useEffect, useRef} from 'react';

type TrackVisibilityProps = {
  onVisible: () => void;
  children: ReactNode
}

// Received from https://hackernoon.com/tracking-element-visibility-with-react-and-the-intersection-observer-api-7dfaf3a47218
const TrackVisibility = ({onVisible, children}: TrackVisibilityProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio === 1) {
        onVisible()
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });
    if (ref.current) {
      observer.observe(ref.current)
    }
  });
  return (<div ref={ref}>
    {children}
  </div>)
};
export default TrackVisibility;