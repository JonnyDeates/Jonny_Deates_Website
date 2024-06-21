import React, {useState} from 'react';
import TrackVisibility from "../../../../components/utils/TrackVisibility";
import {SectionType} from "../../data/HomeData";
import SectionBody from "../SectionBody/SectionBody";
import ImageList from "../ImageList/ImageList";
import SlantedOutlinedHeader from "../SlantedOutlinedHeader/SlantedOutlinedHeader";


// type SectionProps = { isFlipped: boolean, section: SectionType };

// const Section = ({section, isFlipped}: SectionProps) => {
//   const [hasAnimationRun, setHasAnimationRun] = useState<boolean>(false);
//
//   return (
//     <TrackVisibility onVisible={() => setHasAnimationRun(true)}>
//       <div className="App-body">
//         {isFlipped ?
//           <>
//             <ImageList imageList={section.images} isFlipped={isFlipped} hasAnimationRan={hasAnimationRun}/>
//             <SectionBody isFlipped={isFlipped} hasAnimationRan={hasAnimationRun} {...section}/>
//           </>
//           :
//           <>
//             <SectionBody isFlipped={isFlipped} hasAnimationRan={hasAnimationRun} {...section}/>
//             <ImageList imageList={section.images} isFlipped={isFlipped} hasAnimationRan={hasAnimationRun}/>
//           </>
//         }
//
//       </div>
//     </TrackVisibility>
//   );
// };

type SectionProps = {
    backgroundColor: string,
    outsideSectionColor: string,
    isFlipped: boolean
    section: SectionType
}

const Section   = ({backgroundColor, section: {description, header, images, skills}, outsideSectionColor, isFlipped}: SectionProps)=> {

    return <div className="WrapperText">
        <SlantedOutlinedHeader
            headerList={skills}
            outlineWidth="5px"
            rotationAngle={-9}
            fontSize={80}
            backgroundColor={backgroundColor}
            outerBackgroundColor={outsideSectionColor}
        />
        <div style={{backgroundColor}}>
            <SectionBody header={header} description={description} isFlipped={isFlipped} hasAnimationRan={true} backgroundColor={backgroundColor}/>
        </div>
    </div>
}

export default Section;
