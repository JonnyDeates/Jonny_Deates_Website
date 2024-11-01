import React from 'react';
import {ProjectType} from "../../data/ProjectData";
import './ProjectCard.css'
import LanguageCarousel from "./components/LanguageCarousel";
import {Button} from "koi-pool";
import openNewTabWindow from "../../../../utils/openNewTabWindow";

type CarouselItemProps = {
  project: ProjectType,
  handleDoubleClick: () => void,
  zIndexLookUp: number[],
  index: number,
  active: number,
  isFlipped: boolean,
  setProgress: (int: number) => void
}


const ProjectCard = ({
                       active,
                       isFlipped,
                       index,
                       handleDoubleClick,
                       project: {image, title, description, link, role, languages},
                       zIndexLookUp,
                       setProgress
                     }: CarouselItemProps) => {

  let projectsCount = zIndexLookUp.length;
  const zIndex = zIndexLookUp[index]
  const activeIndex = (index - active) / projectsCount;
  const x = `calc(${activeIndex} * 700% - 50%)`;
  const y = active <= index ? `calc(${activeIndex} * 250% - 50%)` : `calc(${activeIndex} * 250% * -1 - 50%)`;

  const rotation = `calc(${activeIndex} * 160deg)`;
  const opacity = active === index ? 1 : `calc(${zIndex} / ${projectsCount} * 3 - 1.75)`;


  const handleProgress = () => {
    setProgress((index / projectsCount) * 100 + 10)
  };

  const formatedLink = link.replaceAll('https://', '')

  return (
    <div
      className='ProjectCard'
      style={{
        zIndex,
        opacity,
        transform: `translate(${x}, ${y}) rotate(${rotation})`,
      }}
      onClick={() => active === index ? handleDoubleClick() : handleProgress()}
    >
      <div className="ProjectCardContent" style={{transform: `rotateY(${isFlipped ? 180 : 0}deg)`}}>
        <div className="Front">
          <h2>{title}</h2>
          <img src={image} alt={`${title} Image`}/>

        </div>
        <div className={'Back'} style={{animationDelay: `${index * -2}s`}}>
          <h2>{title}</h2>
          <h3>{role}</h3>
          <LanguageCarousel languages={languages} projectTitle={title}/>
          <p>{description}</p>
          {link &&
              <Button variant={'accept'} className={'Button'} onClick={() => openNewTabWindow(link)}>Go
                  to {formatedLink}</Button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;