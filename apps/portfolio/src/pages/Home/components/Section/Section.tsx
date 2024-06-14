import React, {useState} from 'react';
import TrackVisibility from "../../../../components/utils/TrackVisibility";
import {SectionType} from "../../data/HomeData";
import SectionBody from "../SectionBody/SectionBody";
import ImageList from "../ImageList/ImageList";


type SectionProps = { isFlipped: boolean, section: SectionType };

const Section = ({section, isFlipped}: SectionProps) => {
  const [hasAnimationRun, setHasAnimationRun] = useState<boolean>(false);

  return (
    <TrackVisibility onVisible={() => setHasAnimationRun(true)}>
      <div className="App-body">
        {isFlipped ?
          <>
            <ImageList imageList={section.images} isFlipped={isFlipped} hasAnimationRan={hasAnimationRun}/>
            <SectionBody isFlipped={isFlipped} hasAnimationRan={hasAnimationRun} {...section}/>
          </>
          :
          <>
            <SectionBody isFlipped={isFlipped} hasAnimationRan={hasAnimationRun} {...section}/>
            <ImageList imageList={section.images} isFlipped={isFlipped} hasAnimationRan={hasAnimationRun}/>
          </>
        }

      </div>
    </TrackVisibility>
  );
};

export default Section;
