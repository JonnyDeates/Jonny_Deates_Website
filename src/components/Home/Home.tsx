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
import companyLogo from "../../assets/logos/yinyangyexin.png";
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
                "sorts of hidden animations within! I am always growing and adapting to the current technologies \n" +
                " being used."
            }
        ];
        const section2 = [
            {
                images: [{link: 'https://www.thinkful.com', src: tLogo, name: "Thinkful"}],
                header: "Thinkful - Engineering Immersion",
                descr: "I was enrolled in a fast-tracked, full time program of online classes, mentorship, \n" +
                "and career coaching. They taught me so much about being in an agile enviroment and what it \n" +
                "takes to develop to create a full fledged application. "
            }
        ];
        const section3 = [
            {
                images: [{link: 'https://www.koifoundation.com', src: companyLogo, name: "The Koi Foundation"}],
                header: "",
                descr: "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
                "to expand the world's access too needed informed, factual information. Currently with two webservices \n" +
                "available and another on the way, it will be the goto place for resources and self-improvement for all."
            }
        ];
        return (
            <>
            <div className="App-body">
                <Introduction introduction={'Hello!'}/>
            </div>
            <h1 className="body-header">The Koi Foundation LLC</h1>
            {section3.map((obj, i) => <Language key={'section1' + i} images={obj.images} header={obj.header}
                                                descr={obj.descr}
                                                flipped={(i % 2 === 0) || minWidth}/>)}
            <h1 className="body-header">Where I Shine</h1>
            {section1.map((obj, i) => <Language key={'section1' + i} images={obj.images} header={obj.header}
                                                descr={obj.descr}
                                                flipped={(i % 2 === 0) || minWidth}/>)}
            <h1 className="body-header">Where I'm Currently</h1>
            {section2.map((obj, i) => <Language key={'section2' + i} images={obj.images} header={obj.header}
                                                descr={obj.descr}
                                                flipped={(i % 2 === 0) || minWidth}/>)}
            </>
        );
    }
}

export default Home;
