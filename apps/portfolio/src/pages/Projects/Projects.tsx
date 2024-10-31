import React  from 'react';
import './Projects.css'
import Header from "../../components/Header/Header";
import HeaderBox from "../../components/Header/components/HeaderBox/HeaderBox";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";

const Projects = () => {

    return (
        <Header isSplitBackground={false} height={'100vh'}>
            <HeaderBox
                header={'Projects'}
                headerBoxStyle={{top: '6%',color:"white", textShadow: '0px 0px 4px black', position: "absolute", left: "50%", transform: 'translateX(-50%)' }}
                chibiStyle={{width: "150px"}}
            />
            <ProjectsCarousel />
        </Header>
    );
};

export default Projects;