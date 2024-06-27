import React, {useState} from 'react';
import './Projects.css'
import {Button} from "koi-pool";
import ProjectsData from "./data/ProjectData";
import Project from "./Project/Project";

const Projects = () => {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const projects = ProjectsData;

  const handleDisabled = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 600);
  };

  const handleIncrementCurrentProjectIndex = () => {
    handleDisabled();
    if(currentProjectIndex + 1 >= projects.length) {
      setCurrentProjectIndex(0)
    } else {
      setCurrentProjectIndex(currentProjectIndex + 1)
    }
  }
  const handleDecrementCurrentProjectIndex = () => {
    handleDisabled();
    if(currentProjectIndex - 1 < 0) {
      setCurrentProjectIndex(projects.length-1)
    } else {
      setCurrentProjectIndex(currentProjectIndex - 1)
    }
  }
  return (
    <div>
      <div>{
        projects.map((project, index) =>
          <Project {...project}
                   currentActiveIndex={currentProjectIndex}
                   index={index}/>
        )}
      </div>
      <div className={'ProjectsButtonGroup'}>
      <Button disabled={isDisabled}
              onClick={handleDecrementCurrentProjectIndex}>{"<"}</Button>
      <Button disabled={isDisabled}
              onClick={handleIncrementCurrentProjectIndex}>{">"}</Button>
      </div>
  </div>
  );
};

export default Projects;