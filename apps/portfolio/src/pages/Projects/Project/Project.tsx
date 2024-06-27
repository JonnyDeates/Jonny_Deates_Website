import React, {useState} from 'react';
import './Project.css';
import {Button} from "koi-pool";
import ProjectsData, {ProjectType} from "../data/ProjectData";
import handleDelayedToggle from "../../../utils/handleDelayedToggle";
// Always make sure the index is between the array length and 0
const getIndex = (index: number, change: number, arrayLength: number) => {
  const newIndex = (index + change) % arrayLength;
  return newIndex < 0 ? newIndex + arrayLength : newIndex;
};
type ProjectProps = ProjectType & {
  index: number,
  currentActiveIndex: number,
  setCurrentActiveIndex: (index: number) => void
}
const Project = ({image, title, description, link, index, currentActiveIndex, setCurrentActiveIndex}: ProjectProps) => {
  const next2ClassName = getIndex(currentActiveIndex, 2, ProjectsData.length) === index ? "next2" : "";
  const nextClassName = getIndex(currentActiveIndex, 1, ProjectsData.length) === index ? "next" : "";
  const prevClassName = getIndex(currentActiveIndex, -1, ProjectsData.length) === index ? "previous" : "";
  const isActive = currentActiveIndex === index;
  const activeClassName = isActive ? "active" : ""
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClick = () => {
    if (!isActive && !isDisabled) {
      setCurrentActiveIndex(index);
      handleDelayedToggle(setIsDisabled, 600);
    }
  };

  return <div className={`Project ${activeClassName} ${prevClassName} ${nextClassName} ${next2ClassName}`} onClick={handleClick}
              style={{backgroundImage: `url(${image})`, cursor: isDisabled ? 'not-allowed': 'pointer'}}>
    <div className='ProjectContent' style={{display: isActive ? "unset" : "none"}}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button>Visit Site</Button>
    </div>
  </div>
}

export default Project;
