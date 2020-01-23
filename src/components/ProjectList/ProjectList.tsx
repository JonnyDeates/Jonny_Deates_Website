import React from 'react';
import giveawayWheel from '../../assets/projects/giveawaywheel.png'
import koiTimer from '../../assets/projects/koitimer.png'
import koiGoalKeeper from '../../assets/projects/koigoalkeeper.png'
import dearBeer from '../../assets/projects/dearbeer.png'
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
            image: '',
            title: "Project 1",
            subTitle: "",
            link: '',
            githubLink: '', //Change This
            color: '#cdcdcd',
            descr: ""
        },{
            image: '',
            title: "Project 2",
            subTitle: "",
            link: '',
            githubLink: '', //Change This
            color: '#9a9a9a',
            descr: ""
        },
            {
                image: '',
                title: "Project 3",
                subTitle: "",
                link: '',
                githubLink: '', //Change This
                color: '#585858',
                descr: ""
            },
            {
                image: '',
                title: "Project 4",
                subTitle: "",
                link: '',
                githubLink: '', //Change This
                color: '#d5d5d5',
                descr: ""
            },
        ];
        return (
            <div className="projectList">
                <h1 className="body-header">Intro</h1>
                {projects.map((obj, i) => <Project key={'project' + i} title={obj.title} subTitle={obj.subTitle}
                                                   descr={obj.descr} image={obj.image} link={obj.link}
                                                   color={obj.color} githubLink={obj.githubLink}/>)}
            </div>
        );
    }
}

export default ProjectList;
