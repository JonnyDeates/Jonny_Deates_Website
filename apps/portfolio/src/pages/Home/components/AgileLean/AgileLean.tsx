import React, {CSSProperties} from 'react';
import './AgileLean.css'

type CircleSpinningTextProps = {
  text: string,
  diameter: number,
  rotationFlipped?: boolean
  style?: CSSProperties
}

const CircleSpinningText = ({text, diameter, rotationFlipped = false, style = {}}: CircleSpinningTextProps)=> {
  const textSplit = text.split('');
  const circleSpinningTextStyle = {...style, width: diameter, height: diameter, animation:`rotateWithTransform 20s infinite linear ${rotationFlipped ? 'reverse': ""}` }

  return <div className={'CircleSpinningText'} style={circleSpinningTextStyle}>
    {textSplit
      .map((letter, index) =>
        <span key={text + letter + index}
              style={{transform: `rotate(${index * (360 / text.length)}deg)`, height: diameter/2}}>
          {letter}
        </span>)}
  </div>
}

const AgileLean = () => {
  const Agile = "Result -> Idea -> Plan -> Test -> Design -> Implementation -> "
  const Lean = 'Measure <- Learn <- Build <- ';
  return (
    <div className={'AgileLean'}>
      <CircleSpinningText text={Agile} diameter={300}/>
      <CircleSpinningText text={Lean} diameter={150} style={{top: -6, left: -6}} rotationFlipped/>
    </div>
  );
};

export default AgileLean;