import {SectionType} from "../../data/HomeData";
import React from "react";


type SectionBodyProps = Omit<SectionType, 'images'> & { isFlipped: boolean, hasAnimationRan: boolean }

const SectionBody = ({header, description, hasAnimationRan, isFlipped}: SectionBodyProps) => {
  const animationDirection = isFlipped ? 'slideInRight' : 'slideInLeft';
  return <div
    style={{animation: (hasAnimationRan) ? `2s ${animationDirection} forwards` : ''}}>
    <h2>{header}</h2>
    <p>{description}</p>
  </div>
};

export default SectionBody;