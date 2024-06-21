import {SectionType} from "../../data/HomeData";
import React from "react";
import "./SectionBody.css"

type SectionBodyProps = Omit<SectionType, 'images' | "skills"> & { isFlipped: boolean, hasAnimationRan: boolean, backgroundColor: string }

const SectionBody = ({header, description, hasAnimationRan, isFlipped }: SectionBodyProps) => {
  const animationDirection = isFlipped ? 'slideInRight' : 'slideInLeft';
  return <div
      className={'SectionBody'}
    style={{animation: (hasAnimationRan) ? `2s ${animationDirection} forwards` : '' }}>
    <h2>{header}</h2>
    <p>{description}</p>
  </div>
};

export default SectionBody;