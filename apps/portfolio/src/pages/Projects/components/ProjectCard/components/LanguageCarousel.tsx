import React, {useEffect} from 'react';
import './LanguageCarousel.css'

type LanguageCarouselProps = {
  languages: string[],
  projectTitle: string
};
const LanguageCarousel = ({languages, projectTitle}: LanguageCarouselProps) => {


  const formatedTitle = projectTitle.replaceAll(' ', '-').replaceAll('.', '');

  const uniqueName = 'scroll-' + formatedTitle;

  useEffect(() => {
    if(languages.length > 1) {

    const keyframes = [];
    const step = 100 / (languages.length);
    const heightOfText = 33;

    for (let index = 0; index < languages.length; index++) {
      const position = index * heightOfText;
      const start = index * step;
      const end = Math.round(start + step / 3); // You can adjust this range for overlap

      keyframes.push(`
      ${start}%, ${end}% {
        transform: translateY(-${position}px);
      }
    `);
    }
    keyframes.push(`100% { transform: translateY(-${(languages.length) * heightOfText}px); }`);

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
    @keyframes ${uniqueName} {
      ${keyframes.join('')}
    }
  `, styleSheet.cssRules.length);
    }

  }, []);
  if(languages.length < 1) {
    return <></>
  }
  return (
    <div className={'LanguageCarousel'}>
      <div className={'Content'} style={{animation: `${uniqueName} ${languages.length * 1.5}s ease-in-out infinite`}}>
        {[...languages, languages[0]].map((text, index) => <div key={formatedTitle + text + index}>
          {text}
        </div>)}
      </div>
    </div>
  );
};
export default LanguageCarousel;