import React from 'react';
import giveawayWheel from '../../assets/projects/giveawaywheel.png'
import koiTimer from '../../assets/projects/koitimer.png'
import koiGoalKeeper from '../../assets/projects/koigoalkeeper.png'
import Project from "./Project/Project";
import "./ProjectList.css"

interface Projects {
    image: any,
    title: string,
    subTitle: string,
    link: string,
    githubLink: string,
    color: string,
    descr: string
}

class ProjectList extends React.Component<{}> {
    render() {
        const projects: Projects[] = [{
            image: koiGoalKeeper,
            title: "The Koi Goal Keeper",
            subTitle: "App & Web Design / Reactjs / NodeJs / SQL",
            link: 'https://koigoalkeeper.com',
            githubLink: 'https://github.com/JonnyDeates/koi-goal-keeper',
            color: '#99e0ff',
            descr: "A full stack application created for the easy posting, updating, and archiving of personal goals of individuals and \n" +
                "inspired by the own need for something as such. The site minimizes the Users need to select timing and heavily focuses on \n" +
                "the substance being the goals. Each goal can be checked off, edited, transfered, and deleted. The website uses a sql database to store all of the data with a middleman \n" +
                "api that I also developed. The site includes full security for the user, and proper encryption of the persons data."
        },
            {
                image: koiTimer,
                title: "The Koi Timer",
                subTitle: "Web Design / Reactjs",
                link: 'https://koitimer.com',
                githubLink: 'https://github.com/JonnyDeates/Koi-Timer',
                color: '#98fff2',
                descr: "A website dedicated to my own take on the Pomodoro Technique. The Timer has a wide range of customizability and \n" +
                    "can be tailored to an individuals needs. I also made sure to include a simple todo list, with a checklist, for a user \n" +
                    "to keep track of goals they are current planning on finishing while using the Timer. The future of the project is to \n" +
                    "add more options and customizable presets for users."
            },
            {
                image: giveawayWheel,
                title: "Giveaway Wheel",
                subTitle: "Web Design / Typescript / Canvas",
                link: 'https://giveawaywheel.net',
                githubLink: 'https://github.com/JonnyDeates/GiveawayWheel',
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
                <p className="project-descr">Below is a list of recent projects that I have contributed help with, or
                    developed on my own fully.
                    If you would like to keep up with my current projects then follow me over on twitter.</p>
                {projects.map((obj, i) => <Project key={'project' + i} title={obj.title} subTitle={obj.subTitle}
                                                   descr={obj.descr} image={obj.image} link={obj.link}
                                                   color={obj.color} githubLink={obj.githubLink}/>)}
            </div>
        );
    }
}

export default ProjectList;
