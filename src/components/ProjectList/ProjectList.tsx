import React from 'react';
import giveawayWheel from '../../assets/projects/giveawaywheel.png'
import koiTimer from '../../assets/projects/koitimer.png'
import Project from "./Project/Project";
import "./ProjectList.css"

class ProjectList extends React.Component<{}> {
    render() {
        const projects = [{
            image: koiTimer,
            title: "The Koi Timer",
            subTitle: "Web Design / Reactjs",
            link: 'https://giveawaywheel.net',
            color: '#99e0ff',
            descr: "A website I design / maintained tailored to content creators, and those who would like a quick way of hosting a fair \n" +
                "giveaway with small to medium amount of contestants. The site if free to use, and has full functionality, and is in \n" +
                "of getting advertisements added. The future of the project is to add more polish and more customizable options for the \n " +
                "wheel."
        },
            {
                image: giveawayWheel,
                title: "Giveaway Wheel",
                subTitle: "Web Design / Typescript / Canvas",
                link: 'https://giveawaywheel.net',
                color: '#82ffad',
                descr: "A website I design / maintained tailored to content creators, and those who would like a quick way of hosting a fair \n" +
                    "giveaway with small to medium amount of contestants. The site if free to use, and has full functionality, and is in \n" +
                    "of getting advertisements added. The future of the project is to add more polish and more customizable options for the \n " +
                    "wheel."
            },
        ];
        return (
            <div className="projectList">
                <h1 className="body-header">My Work</h1>
                <p className="project-descr">Below is a list of recent projects that I have contributed help with, or developed on my own fully.
                    If you would like to keep up with my current projects then follow me over on twitter.</p>
                {projects.map((obj, i) => <Project key={'project' + i} title={obj.title} subTitle={obj.subTitle}
                                                   descr={obj.descr} image={obj.image} link={obj.link} color={obj.color}/>)}
            </div>
        );
    }
}

export default ProjectList;
