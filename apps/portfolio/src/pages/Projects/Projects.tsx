import React, {useState} from 'react';
import './Projects.css'
import {Button} from "koi-pool";
import ProjectsData from "./data/ProjectData";
import Project from "./Project/Project";
import Header from "../../components/Header/Header";
import Chibi from "../../components/Chibi/Chibi";
import handleDelayedToggle from "../../utils/handleDelayedToggle";



const Projects = () => {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const projects = ProjectsData;


  const handleIncrementCurrentProjectIndex = () => {
    handleDelayedToggle(setIsDisabled, 600);
    if(currentProjectIndex + 1 >= projects.length) {
      setCurrentProjectIndex(0)
    } else {
      setCurrentProjectIndex(currentProjectIndex + 1)
    }
  }
  const handleDecrementCurrentProjectIndex = () => {
    handleDelayedToggle(setIsDisabled, 600);
    if(currentProjectIndex - 1 < 0) {
      setCurrentProjectIndex(projects.length-1)
    } else {
      setCurrentProjectIndex(currentProjectIndex - 1)
    }
  }
  return (
    <>
    <Header isSplitBackground={false} height={'20vh'}>
      <Chibi frameAttributes={{style: {top: "100px"}}}/>
    </Header>
      <div className={"ProjectList"} style={{position: 'relative'}}>{
        projects.map((project, index) =>
          <Project {...project}
                   currentActiveIndex={currentProjectIndex}
                   setCurrentActiveIndex={setCurrentProjectIndex}
                   index={index}/>
        )}
      <div className={'ProjectsButtonGroup'}>
      <Button disabled={isDisabled}
              onClick={handleDecrementCurrentProjectIndex}>{"<"}</Button>
      <Button disabled={isDisabled}
              onClick={handleIncrementCurrentProjectIndex}>{">"}</Button>
      </div>
      </div>
      </>
  );
};

export default Projects;