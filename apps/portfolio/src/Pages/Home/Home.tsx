import React from 'react';
import './Home.css';
import tsLogo from '../../Assets/logos/typescript.png'
import jsLogo from '../../Assets/logos/javascript.png'
import rLogo from '../../Assets/logos/reactjs.png'
import pLogo from '../../Assets/logos/python.png'
import mLogo from '../../Assets/logos/minimalism.png'
import tLogo from '../../Assets/logos/thinkful.jpg'
import gmLogo from '../../Assets/logos/growthmindest.jpg'
import Introduction from "./components/Introduction/Introduction";
import Language from "./Language/Language";

const Home = () => {
    const minWidth = window.innerWidth < 767;
    const section1 = {
        images: [{
            link: 'https://www.typescriptlang.org/',
            src: tsLogo,
            name: "Typescript",
            style: {display: 'block'},
            animationEnded: false,
            newAnimation: ''
        },
            {
                link: 'https://reactjs.org/',
                src: rLogo,
                name: "Reactjs",
                style: {display: 'block'},
                animationEnded: false,
                newAnimation: ''
            },
            {
                link: 'https://www.javascript.com/',
                src: jsLogo,
                name: "Javascript",
                style: {display: 'block'},
                animationEnded: false,
                newAnimation: ''
            },
            {
                link: 'https://www.python.org/',
                src: pLogo,
                name: "Python",
                style: {display: 'block'},
                animationEnded: false,
                newAnimation: ''
            }],
        header: "Develop how you want it.",
        descr: " I am very flexible with what languages I can use, especially with javascript. I have a lot of \n" +
            "experience under my belt, started programming at the age of 12 and my desire for more has yet to stop."
    }
    const sections = [{
        images: [{
            link: '',
            src: mLogo,
            name: "Minimalism",
            style: {display: 'block'},
            animationEnded: false,
            newAnimation: ''
        }],
        header: "Minimalistic Design",
        descr: "My specialty is minimalism! Minimalism allows consumers to focus on what is important without \n" +
            "the expense of meticulous details.  Personally, I spend a lot of time creating intuitive, modular, \n" +
            "and modern designs that have invaluable depth to them."
    }, {
        images: [{
            link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful",
            style: {display: 'block'},
            animationEnded: false,
            newAnimation: ''
        }],
        header: "Thinkful - Engineering Immersion",
        descr: "I went through a fast-tracked, full time program of online classes, mentorship, \n" +
            "and career coaching. This Data Science Bootcamp I believe was my fast track to really understand \n" +
            "the intricacies of a work environment and the importance of team building. I am very glad that I had enrolled."
    }, {
        images: [{
            link: 'https://www.youtube.com/watch?v=M1CHPnZfFmU', src: gmLogo, name: "Growth Mindset",
            style: {display: 'block'},
            animationEnded: false,
            newAnimation: ''
        }],
        header: "Livelihood",
        descr: "I am proud to say that I try to do a lot of different activities rather consistently like yoga, \n " +
            "self-reflection, reading, and at-home workouts. A few nights a week, I see friends and try to \n" +
            "volunteer and canvass. Also in my free time, I like to program and work on my own individual projects."
    }];
    return (
        <>
            <Introduction />

            <div className={'shine'}>
                <Language images={section1.images} header={section1.header}
                          descr={section1.descr}
                          flipped={true}/>
            </div>
            {sections.map((obj, i) =>
                <Language key={'obj' + i} images={obj.images} header={obj.header}
                                                descr={obj.descr}
                                                flipped={i % 2 === 1 || minWidth}/>)
            }
        </>
    );
}

export default Home;
