import * as React from 'react';
import {CSSProperties, ReactNode, useEffect, useRef, useState} from 'react';

type TrackVisibilityProps = {
  onVisible?: () => void;
  threshold?: number,
  className?: string,
  intersectionRatio?: number,
  children: ReactNode
  style?: CSSProperties
}

// Received from https://hackernoon.com/tracking-element-visibility-with-react-and-the-intersection-observer-api-7dfaf3a47218
const TrackVisibility = ({onVisible = (()=> {}),threshold = 1, intersectionRatio = 0.3, children, className = '', style={}}: TrackVisibilityProps) => {
  const ref = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= intersectionRatio) {
        setIsVisible(true);
        onVisible();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold
    });
    if (ref.current) {
      observer.observe(ref.current)
    }
    return ()=> {
      if(ref.current){
        observer.unobserve(ref.current)
      }
    }
  }, []);
  return (<div ref={ref} className={className} style={style}>
    {isVisible ? children : <></>}
  </div>)
};
export default TrackVisibility;