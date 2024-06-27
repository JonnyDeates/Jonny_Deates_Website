import React from 'react';
import './Project.css';
import TrackVisibility from "../../../components/utils/TrackVisibility";
import {Button} from "koi-pool";
import ProjectsData, {ProjectType} from "../data/ProjectData";
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
               style={{backgroundImage: `url(${image})`, backgroundPosition: 'top'}}>
        <div className='ProjectContent' style={{display: isActive ? "unset" : "none", opacity: 1}}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button>Visit Site</Button>
        </div>
    </li>
}

export default Project;
