import React, {useState} from 'react';
import './Project.css';
import {IconButton} from "koi-pool";
import ProjectsData, {ProjectType} from "../data/ProjectData";
import handleDelayedToggle from "../../../utils/handleDelayedToggle";
import openNewTabWindow from "../../../utils/openNewTabWindow";
import ProjectCard from "../ProjectCard/ProjectCard";
import openIcon from "../../Home/assets/open.svg";
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
    const projectsLength = ProjectsData.length
    const next2ClassName = getIndex(currentActiveIndex, 2, projectsLength) === index ? "next2" : "";
    const nextClassName = getIndex(currentActiveIndex, 1, projectsLength) === index ? "next" : "";
    const prevClassName = getIndex(currentActiveIndex, -1, projectsLength) === index ? "previous" : "";
    const isActive = currentActiveIndex === index;
    const activeClassName = isActive ? "active" : "";
    const isInitialView = currentActiveIndex === Infinity
    const speedOfInitialAnimation = 60;
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleContainerClick = () => {
        if (!isActive && !isDisabled) {
            setCurrentActiveIndex(index);
            handleDelayedToggle(setIsDisabled, 600);
        }
    };

    const handleButtonClick = () => {
        openNewTabWindow(link)
    }

    return <ProjectCard image={image} isDisabled={isDisabled}
                        className={`${activeClassName} ${prevClassName} ${nextClassName} ${next2ClassName}`}
                        onClick={handleContainerClick}
                        style={{animation: isInitialView ? `rotatingCarousel ${speedOfInitialAnimation}s -${(speedOfInitialAnimation / projectsLength) * index}s infinite linear` : `unset`}}
    >
        <div className='ProjectContent' style={{display: isActive ? "unset" : "none"}}>
            <h2>{title}</h2>
            <p>{description}</p>
            <IconButton className={'Button'} variant={'accept'} onClick={handleButtonClick}
                        src={openIcon as string} title={`Open ${link}`}/>
        </div>
    </ProjectCard>
}

export default Project;
