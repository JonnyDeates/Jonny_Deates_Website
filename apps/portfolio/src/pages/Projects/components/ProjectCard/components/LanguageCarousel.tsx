import React, {useEffect} from 'react';
import './LanguageCarousel.css'

type LanguageCarouselProps = {
  array: string[]
};
const LanguageCarousel = ({array}: LanguageCarouselProps) => {

  const uniqueName = 'scroll-'+array[0];
  useEffect(() => {
    const keyframes = [];
    const step = 100 / (array.length);
    const heightOfText = 30;

    for (const index in array) {
      const position = index * heightOfText;
      const start = index * step;
      const end = Math.round(start + step / 3); // You can adjust this range for overlap

      keyframes.push(`
      ${start}%, ${end}% {
        transform: translateY(-${position}px);
      }
    `);
    }
    keyframes.push(`100% { transform: translateY(-${(array.length) * heightOfText}px); }`);

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
    @keyframes ${uniqueName} {
      ${keyframes.join('')}
    }
  `, styleSheet.cssRules.length);

  }, []);

  return (
    <div className={'LanguageCarousel'}>
      <div className={'Content'} style={{animation: `${uniqueName} ${array.length * 1.5}s ease-in-out infinite`}}>
        {[...array,array[0]].map((text) => <div>{text}</div>)}
      </div>
    </div>
  );
};
export default LanguageCarousel;