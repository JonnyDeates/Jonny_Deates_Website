import React, {CSSProperties} from "react";
import './SlantedOutlinedHeader.css';
import TrackVisibility from "../../../../components/TrackVisibility/TrackVisibility";

type SlantedOutlinedHeaderType = {
  headerList: string[],
  style?: CSSProperties,
  styleOfWrapper?: CSSProperties,
  rotationAngle?: number,
  backgroundColor?: string,
  outerBackgroundColor?: string,
  outlineWidth?: string,
  fontSize?: number,
}

const SlantedOutlinedHeader = ({
                                 headerList,
                                 style = {},
                                 styleOfWrapper = {},
                                 rotationAngle = -4,
                                 backgroundColor = "grey",
                                 outlineWidth = "4px",
                               outerBackgroundColor = 'white',
                                 fontSize = 40,
                               }: SlantedOutlinedHeaderType) => {


  const slantedOutlineHeaderStyle = {
    ...style,
    transform: `rotate(${rotationAngle}deg) translate(0, 30px)`,
    color: outerBackgroundColor === "transparent" ? "#7BC9FF" : outerBackgroundColor ,
    textShadow: `
    ${outlineWidth} 0 0 ${backgroundColor}, 
    0 ${outlineWidth} 0 ${backgroundColor}, 
    -${outlineWidth} 0 0 ${backgroundColor}, 
    0 -${outlineWidth} 0 ${backgroundColor},
       ${outlineWidth} ${outlineWidth} 0 ${backgroundColor}, 
    -${outlineWidth} ${outlineWidth} 0 ${backgroundColor}, 
    -${outlineWidth} -${outlineWidth} 0 ${backgroundColor}, 
    ${outlineWidth} -${outlineWidth} 0 ${backgroundColor}
    `,
    borderBottomColor: backgroundColor,
    fontSize,
    minHeight: `${fontSize}px`,
    borderBottomWidth: `${fontSize * 5}px`,
    marginBottom: `-${fontSize * 2.5}px`,
  };

  const slatedOutlineWrapperStyle = {
    ...styleOfWrapper,
    backgroundColor: outerBackgroundColor
  };

  const slantedOutlineTextStyle = {
   marginBottom: `-${fontSize * .75}px`
  };

  return <div className='SlantedOutlinedHeaderWrapper' style={slatedOutlineWrapperStyle}>
    <div className='SlantedOutlinedHeader' style={slantedOutlineHeaderStyle}>
      {headerList.map((header, index) =>
        <TrackVisibility key={header + index}>
        <p style={slantedOutlineTextStyle}>
          {
            header.split("").map((letter, letterIndex) =>
              <span key={header+letter+index+letterIndex} style={{animation: `1s ${(headerList.slice(0, index).join('').length * .10) + (letterIndex * .10)}s slideInRight forwards`}}>
                {letter}
              </span>
            )
          }
        </p>
        </TrackVisibility>)
      }
    </div>
  </div>
};

export default SlantedOutlinedHeader;