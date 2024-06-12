import React from 'react';
import giveawayWheel from '../../Assets/projects/giveawaywheel.png'
import retroSnakePlus from '../../Assets/projects/retrosnakeplus.png';
import koiTimer from '../../Assets/projects/koitimer.png'
import koiGoalKeeper from '../../Assets/projects/koigoalkeeper.png'
import dearBeer from '../../Assets/projects/dearbeer.png'
import ldshotservices from '../../Assets/projects/ldshotservices.png'
import kpcleaningservices from '../../Assets/projects/kpcleaningservices.png'
import yinyangyexin from '../../Assets/logos/yinyangyexin.png'
import baldridgelodge from '../../Assets/logos/baldridgelodge.png'
import Project from "./Project/Project";
import "./ProjectList.css"

interface Projects {
    image: any,
    title: string,
    subTitle: string,
    link: string,
    githubLink: string,
    demoName: string,
    demoPass: string,
    descr: string
}

interface State {
    header: string,
    description: string,
    colorList: string[],
    projects: Projects[]
}

class ProjectList extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            header: 'My Work',
            description: 'Below is a list of recent projects that I have contributed help with, or\n' +
                'developed on my own. Each project is represented with its symbol and a list of areas in web\n' +
                'development that I had to utilize and below that is a short digest of the project, and then two links:\n' +
                'one to the site, and one to the code written. I am dedicated to following through on my work, and to\n' +
                'keeping them updated.  If you would like to keep up with my current projects then follow me over on ',
            colorList: ['#99e0ff', '#99fcff', '#99ffe2',
                '#99ffd6','#99ffb6','#9cff99', '#acff99',
                '#c9ff99','#ecff99', '#f5ff99', '#fcff99'],
            projects: [{
                image: yinyangyexin,
                title: "Koi Foundation LLC",
                subTitle: "CEO / Reactjs",
                link: 'https://koifoundation.com',
                githubLink: '',
                descr: "A company maintained, and managed for the general public. The company's mission is to provide tools and resources " +
                    "to anyone who desires growth, and to have a grander future. I strive to make the tools accessible, functional, and as modern as they can be." +
                    "I also fully believe the affordability of these tools, and as such they all have free versions, and have the option for a small one time fee for additional cosmetic features." +
                    "The tools were made with Reactjs, MongoDB, and Restful Services.",
                demoName: '',
                demoPass: ''
            }, {
                image: koiGoalKeeper,
                title: "The Koi Goal Keeper",
                subTitle: "UI/UX Design / Reactjs / NodeJs / SQL",
                link: 'https://koigoalkeeper.com',
                githubLink: 'https://github.com/JonnyDeates/koi-goal-keeper',
                descr: "A full stack application created for the easy posting, updating, and archiving of personal goals of individuals and \n" +
                    "inspired by the own need for something as such. The site minimizes the Users need to select timing and heavily focuses on \n" +
                    "the substance being the goals. Each goal can be checked off, edited, transfered, and deleted. The website uses a sql database to store all of the data with a middleman \n" +
                    "api that I also developed. The site includes full security for the user, and proper encryption of the persons data.",
                demoName: 'demoAccount',
                demoPass: 'Password123!'
            },{
                image: baldridgelodge,
                title: "Bald Ridge Lodge",
                subTitle: "UI/UX Design / Wordpress",
                link: 'https://baldridgelodge.org/',
                githubLink: '',
                descr: 'A website dedicated for a Georgia Youth Group, My team and I were tasked with revamping and modernizing their site. ' +
                    'We volunteered to do this for the group. The youth group is a non-profit helping boys 12-21 who come from troubled homes or' +
                    'boys from the local Juvenile Court. As a team we each delegated and conquered individual pages, and managed to provide the ' +
                    'youth group with a site that encompasses everything they need.',
                demoName: '',
                demoPass: ''
            }, {
                image: koiTimer,
                title: "The Koi Timer",
                subTitle: "Web Design / Reactjs",
                link: 'https://koitimer.com',
                githubLink: 'https://github.com/JonnyDeates/Koi-Timer',
                descr: "A website dedicated to my own take on the Pomodoro Technique. The Timer has a wide range of customizability and \n" +
                    "can be tailored to an individuals needs. I also made sure to include a simple todo list, with a checklist, for a user \n" +
                    "to keep track of goals they are current planning on finishing while using the Timer. The future of the project is to \n" +
                    "add more options and customizable presets for users.",
                demoName: '',
                demoPass: ''
            }, {
                image: kpcleaningservices,
                title: "KP Cleaning Services",
                subTitle: "Project Management / UX - UI Design / Reactjs",
                link: 'https://kpcleaningservice.com',
                githubLink: '',
                descr: "A website designed, maintained, and hosted for a business LLC client. The single page application was developed with amplitude, " +
                    "and met all the desired needs the client had asked for. It was developed in Reactjs, and developed out tools for the client to easily update their site. " +
                    "The tools were made with Reactjs, MongoDB, and Restful Services.",
                demoName: '',
                demoPass: ''
            }, {
                image: ldshotservices,
                title: "L D Shot Services",
                subTitle: "Project Management / UX - UI Design / Reactjs",
                link: 'https://ldshotservices.com',
                githubLink: 'https://github.com/JonnyDeates/ldpropertymanagement',
                descr: "A website designed, maintained, and hosted for a small business client. The single page application was developed over a week, " +
                    "and met all the desired needs the client had asked for. It was developed in Reactjs, and regular css. " +
                    "The client also paid for design of the Logo and business cards.",
                demoName: '',
                demoPass: ''
            }, {
                image: dearBeer,
                title: "DearBeer",
                subTitle: "Project Management / Reactjs / NodeJs / SQL",
                link: 'https://dearbeer.now.sh',
                githubLink: 'https://github.com/thinkful-ei-heron/Group4-Capstone-3', //Change This
                descr: "An App developed to be able to track the beers a user has been drinking. Also used to locate bars \n " +
                    "and breweries within your town. The app also tracks the places that you once had a beer at, and shows you the map \n" +
                    "of places that you've drank at. I was the team manager on the application, delegating tasks, ensuring deadlines were met, \n" +
                    "and ensuring the product has high standards.",
                demoName: 'Demo',
                demoPass: 'Test12345!'
            }, {
                    image: giveawayWheel,
                    title: "Giveaway Wheel",
                    subTitle: "Web Design / Typescript / Canvas",
                    link: 'https://giveawaywheel.net',
                    githubLink: 'https://github.com/JonnyDeates/GiveawayWheel',
                    descr: "A website I design tailored to content creators, and those who would like a quick way of hosting a fair \n" +
                        "giveaway with a small to medium amount of contestants. The site if free to use, and has full functionality, and is in \n" +
                        "the process of getting advertisements added. The future of the project is to add more polish and more customizable options for the \n " +
                        "wheel.",
                    demoName: '',
                    demoPass: ''
                }, {
                    image: retroSnakePlus,
                    title: "Retro Snake Plus",
                    subTitle: "Angular / Typescript / Canvas",
                    link: 'https://retrosnakeplus.com/#/',
                    githubLink: 'https://github.com/JonnyDeates/RetroSnakePlus',
                    descr: "A website that was practice, I recreated the game Snake with a bit of a twist. Not only is there food samples that make you grow, there are mongooses that force you to shrink. \n" +
                        "It was built using Angular, and is made to look like a retro hand held console.",
                    demoName: '',
                    demoPass: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className="projectList">
                <h1 className="body-header">{this.state.header}</h1>
                <p className="project-descr">{this.state.description}<span
                    onClick={() => window.open('https://twitter.com/jonnydeates')}>twitter.</span></p>
                {this.state.projects.map((obj, i) => <Project key={'project' + i} title={obj.title}
                                                              subTitle={obj.subTitle}
                                                              descr={obj.descr} image={obj.image} link={obj.link}
                                                              color={this.state.colorList[i]} githubLink={obj.githubLink}
                                                              demoName={obj.demoName} demoPass={obj.demoPass}/>)}
            </div>
        );
    }
}

export default ProjectList;
