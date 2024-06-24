import {SectionType} from "../../data/HomeData";
import React from "react";
import "./SectionBody.css"

type SectionBodyProps = Omit<SectionType, 'images' | "skills"> & {
    isFlipped: boolean,
    hasAnimationRan: boolean,
    backgroundColor: string
}

const SectionBody = ({header, description, subcomponent, hasAnimationRan, isFlipped}: SectionBodyProps) => {
    const animationDirection = isFlipped ? 'slideInLeft' : 'slideInRight';

    return <div
        className={'SectionBody'}>
        <div className={'SectionText'} style={{animation: (hasAnimationRan) ? `2s ${animationDirection} forwards` : ''}}>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
        {subcomponent}
    </div>

};

export default SectionBody;