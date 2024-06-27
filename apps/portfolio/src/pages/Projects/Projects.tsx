import React, {useReducer, useState} from 'react';
import './Projects.css'
import {Button} from "koi-pool";

type ProjectType = {
  image: string,
  title: string,
  description: string,
}

const ProjectsData: ProjectType[] = [{
    image: "",
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  }, {
    image: "",
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  }, {
    image: "",
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  },
    {
    image:"",
      title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  }
  , {
    image:"",
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  }, {
    image: "",
    title: "",
    description: "Lorem ipsum, dolor sit amet consectetur\n" +
      "adipisicing elit. Tempore fuga voluptatum, iure corporis inventore\n" +
      "praesentium nisi. Id laboriosam ipsam enim."
  },
  ];
// Always make sure the index is between the array length and 0
const getIndex = (index: number, change: number, arrayLength: number) => {
  const newIndex = (index + change) % arrayLength;
  return newIndex < 0 ? newIndex + arrayLength : newIndex;
};
const Project = ({image, title, description,  index, currentActiveIndex}: ProjectType & {index: number, currentActiveIndex: number}) => {
  const next2ClassName = getIndex(currentActiveIndex, 2, ProjectsData.length) === index ?  "next2" : "";
  const nextClassName = getIndex(currentActiveIndex, 1, ProjectsData.length) === index ?  "next" : "";
  const prevClassName = getIndex(currentActiveIndex,  - 1, ProjectsData.length) === index ? "previous" : "";
  const isActive =currentActiveIndex === index;
  const activeClassName = isActive ? "active" : "";

  return <li className={`Project ${activeClassName} ${prevClassName} ${nextClassName} ${next2ClassName}`}
             style={{backgroundImage: image}}>
    <div className='ProjectContent' style={{display: isActive ? "unset" : "none", opacity: 1}}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button>Visit Site</Button>
    </div>
  </li>
}

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
      <div >{
        projects.map((project, index) =>
          <Project {...project}
                   currentActiveIndex={currentProjectIndex}
                   index={index}/>
        )}
      </div>
      <Button style={{zIndex: 5, position: "relative"}} disabled={isDisabled}
              onClick={handleIncrementCurrentProjectIndex}>Inc</Button>
      <Button style={{zIndex: 5, position: "relative"}} disabled={isDisabled}
              onClick={handleDecrementCurrentProjectIndex}>Dec</Button>
    </div>
  );
};

export default Projects;