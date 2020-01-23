import React from 'react';
import './Home.css';
import tsLogo from '../../assets/logos/typescript.png'
import jsLogo from '../../assets/logos/javascript.png'
import rLogo from '../../assets/logos/reactjs.png'
import pLogo from '../../assets/logos/python.png'
import mLogo from '../../assets/logos/minimalism.png'
import tLogo from '../../assets/logos/thinkful.jpg'
import gmLogo from '../../assets/logos/growthmindest.jpg'
import Introduction from "../Introduction/Introduction";
import Language from "./Language/Language";

interface Props {
    introduction: string;
}

class Home extends React.Component<Props, {}> {
    render() {
        const minWidth = window.innerWidth < 767;
        const section1 = [{
            images: [{link: 'https://www.typescriptlang.org/', src: tsLogo, name: "Typescript"},
                {link: 'https://reactjs.org/', src: rLogo, name: "Reactjs"},
                {link: 'https://www.javascript.com/', src: jsLogo, name: "Javascript"},
                {link: 'https://www.python.org/', src: pLogo, name: "Python"}],
            header: "Develop how you want it.",
            descr: " I am very flexible with what languages I can use, especially with javascript. I have a lot of \n" +
                "experience under my belt, started programming at the age of 12 and my desire for more has yet to stop."
        },
            {
                images: [{link: '', src: mLogo, name: "Minimalism"}],
                header: "Minimalistic Design",
                descr: "My specialty is minimalism! Minimalism allows consumers to focus on what is important without \n" +
                    "the expense of meticulous details.  Personally, I spend a lot of time creating intuitive, modular, \n" +
                    "and modern designs that have depth to them."
            }
        ];
        const section2 = [{
                images: [{link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful"}],
                header: "Thinkful - Engineering Immersion",
                descr: "I am currently enrolled in a fast-tracked, full time program of online classes, mentorship, \n" +
                    "and career coaching. This Data Science Bootcamp I believe is my fast track to really understand \n" +
                    "the intricacies of a work environment and the importance of team building. I am very glad that I enrolled "
        },{
             images: [{link: 'https://www.youtube.com/watch?v=M1CHPnZfFmU', src: gmLogo, name: "Growth Mindset"}],
             header: "Livelihood",
             descr: "I am proud to say that I try to do a lot of different activities rather consistently like yoga, \n " +
                 "self-reflection, reading, and at-home workouts. A few nights a week, I see friends and try to \n" +
                 "volunteer and canvass. Also in my free time, I like to program and work on my own individual projects."
         }
        ];
        return (
            <>
                <Introduction introduction={'Introduction'}/>
                <h1 className="body-header">Section 1</h1>
                <h1 className="body-header cool">Section 2</h1>
            </>
        );
    }
}

export default Home;
