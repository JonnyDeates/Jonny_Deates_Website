import {SectionType} from "../../data/HomeData";
import React from "react";
import "./SectionBody.css"
import TrackVisibility from "../../../../components/TrackVisibility/TrackVisibility";

type SectionBodyProps = Omit<SectionType, 'images' | "skills"> & {
    isFlipped: boolean,
    hasAnimationRan: boolean,
    backgroundColor: string
}

const SectionBody = ({header, description, subcomponent, hasAnimationRan, isFlipped}: SectionBodyProps) => {
    const animationDirection = isFlipped ? 'slideInLeft' : 'slideInRight';


    const SectionText = ()=> {
        return <div className={'SectionText'}
                    style={{animation: (hasAnimationRan) ? `2s ${animationDirection} forwards` : ''}}>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    }


    return <TrackVisibility
      className={'SectionBody'}>
        {isFlipped
          ? <>
          <SectionText />
        {subcomponent}
        </>
          : <>
          {subcomponent}
              <SectionText/>
          </>
        }
    </TrackVisibility>

};

export default SectionBody;