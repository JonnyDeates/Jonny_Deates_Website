import React from 'react';
import './Home.css';
import tsLogo from '../../assets/logos/typescript.png'
import jsLogo from '../../assets/logos/javascript.png'
import rLogo from '../../assets/logos/reactjs.png'
import pLogo from '../../assets/logos/python.png'
import mLogo from '../../assets/logos/minimalism.png'
import tLogo from '../../assets/logos/thinkful.jpg'
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
                descr: "My specialty is minimalism! Love creating intuitive, modern designs that have all \n" +
                    "sorts of hidden animations within!"
            }
        ];
        const section2 = [
            {
                images: [{link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful"}],
                header: "Thinkful - Engineering Immersion",
                descr: "I am currently enrolled in a fast-tracked, full time program of online classes, mentorship, \n" +
                    "and career coaching."
            }
        ];
        return (
            <>
                <Introduction introduction={'Hello!'}/>
                <h1 className="body-header">Where I Shine</h1>
                {section1.map((obj, i) => <Language key={'section1'+i} images={obj.images} header={obj.header} descr={obj.descr}
                                                    flipped={(i % 2 === 0) || minWidth}/>)}
                <h1 className="body-header">Where I'm Currently</h1>
                {section2.map((obj,i) => <Language key={'section2'+i} images={obj.images} header={obj.header} descr={obj.descr}
                                               flipped={(i % 2 === 0) || minWidth}/>)}
            </>
        );
    }
}

export default Home;
