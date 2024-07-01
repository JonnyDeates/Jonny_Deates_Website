import React from 'react';
import {SectionType} from "../../data/HomeData";
import SectionBody from "../SectionBody/SectionBody";
import SlantedOutlinedHeader from "../SlantedOutlinedHeader/SlantedOutlinedHeader";
import "./Section.css"
import {SCREEN_WIDTH, useScreenWidth} from "../../../../utils/useScreenWidth";

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
    outsideSectionColor: string,
    isFlipped: boolean
    section: SectionType
}

const Section = ({
                     section: { skills, backgroundColor, ...restOfSection},
                     outsideSectionColor,
                     isFlipped
                 }: SectionProps) => {

    const screenWidth = useScreenWidth();

    const getRotationAngle = () => (screenWidth <= SCREEN_WIDTH["720p"]) ? 9 : 6
    const getFontStyle = () => {
        if (screenWidth === SCREEN_WIDTH.mobile) {
            return {fontSize: 30, outlineWidth: "2px"}
        } else if (screenWidth === SCREEN_WIDTH.tablet) {
            return {fontSize: 50, outlineWidth: "3px"}
        } else if (screenWidth <= SCREEN_WIDTH["1080p"]) {
            return {fontSize: 70, outlineWidth: "4px"}
        } else {
            return {fontSize: 90, outlineWidth: "5px"}
        }
    };

    return <div className="Section">
        <SlantedOutlinedHeader
            headerList={skills}
            rotationAngle={isFlipped ? getRotationAngle() : -1 * getRotationAngle()}
            backgroundColor={backgroundColor}
            outerBackgroundColor={outsideSectionColor}
            {...getFontStyle()}
        />
        <div style={{
            backgroundColor,
            color: backgroundColor === 'black' ? 'white' : 'black'
        }}
             className={"SectionContent"}>
            <SectionBody isFlipped={isFlipped  || screenWidth <= SCREEN_WIDTH.tablet} {...restOfSection}
                         hasAnimationRan={true} backgroundColor={backgroundColor}/>
        </div>
    </div>
}

export default Section;
