import React, {useState} from 'react';
import './Projects.css'
import {Button} from "koi-pool";
import ProjectsData from "./data/ProjectData";
import Project from "./Project/Project";
import Header from "../../components/Header/Header";
import handleDelayedToggle from "../../utils/handleDelayedToggle";
import HeaderBox from "../../components/Header/components/HeaderBox/HeaderBox";


const Projects = () => {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(Infinity);
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const projects = ProjectsData;


    const handleIncrementCurrentProjectIndex = () => {
        handleDelayedToggle(setIsDisabled, 600);
        if (currentProjectIndex + 1 >= projects.length) {
            setCurrentProjectIndex(0)
        } else {
            setCurrentProjectIndex(currentProjectIndex + 1)
        }
    }
    const handleDecrementCurrentProjectIndex = () => {
        handleDelayedToggle(setIsDisabled, 600);
        if (currentProjectIndex - 1 < 0) {
            setCurrentProjectIndex(projects.length - 1)
        } else {
            setCurrentProjectIndex(currentProjectIndex - 1)
        }
    }

    return (
        <Header isSplitBackground={false} height={'100vh'}>
            <HeaderBox
                header={'Projects'}
                headerBoxStyle={{top: '12%',color:"white", textShadow: '0px 0px 4px black', position: "absolute", left: "50%", transform: 'translateX(-50%)' }}
                chibiStyle={{width: "150px"}}
            />
            <div className={currentProjectIndex === Infinity ? "ProjectListInitial" : "ProjectList"}>
                {
                    projects.map((project, index) =>
                        <Project {...project}
                                 currentActiveIndex={currentProjectIndex}
                                 setCurrentActiveIndex={setCurrentProjectIndex}
                                 index={index}/>
                    )}
                {
                    currentProjectIndex !== Infinity ?
                        <div className={'ProjectsButtonGroup'}>
                            <Button disabled={isDisabled}
                                    onClick={handleDecrementCurrentProjectIndex}>{"<"}</Button>
                            <Button disabled={isDisabled}
                                    onClick={handleIncrementCurrentProjectIndex}>{">"}</Button>
                        </div>
                        : <></>
                }

            </div>
        </Header>
    );
};

export default Projects;