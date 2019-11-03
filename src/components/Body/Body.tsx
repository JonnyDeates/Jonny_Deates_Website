import React from 'react';
import './Body.css';
import tsLogo from '../../assets/logos/typescript.png'
import jsLogo from '../../assets/logos/javascript.png'
import rLogo from '../../assets/logos/reactjs.png'
import pLogo from '../../assets/logos/python.png'
import mLogo from '../../assets/logos/minimalism.png'
import tLogo from '../../assets/logos/thinkful.jpg'
import Introduction from "../Introduction/Introduction";

interface Props {
    introduction: string;
}

class Body extends React.Component<Props, {}> {
    render() {
        return (
            <>
                <div className="App-body">
                    <Introduction introduction={'Hello!'}/>
                </div>
                <h1 className="body-header">Where I Shine</h1>
                <div className="App-body">
                    <div className='logos'>
                        <img src={tsLogo} alt='Typescript' width='100px' height='100px'/>
                        <span>{" "}</span>
                        <img src={rLogo} alt='Reactjs' width='100px' height='100px'/>
                        <div>{" "}</div>
                        <img src={jsLogo} alt='Javascript' width='100px' height='100px'/>
                        <span>{" "}</span>
                        <img src={pLogo} alt='Python' width='100px' height='100px'/>
                    </div>
                    <div>
                        <h2>Develop how you want it.</h2>
                        <p> I am very flexible with what languages I can use, especially with javascript. I have a lot of experience under my belt, started programming at the age of 12 and my desire for more has yet to stop.</p>
                    </div>
                </div>
                <div className="App-body">
                    <div>
                        <h2>Minimalistic Design</h2>
                        <p>My specialty is minimalism! Love creating intuitive, modern designs that have all sorts of hidden animations within! </p>
                    </div>
                    <div className='logos'>
                        <img src={mLogo} alt='Minimalism' width='100px' height='100px'/>
                    </div>

                </div>
                <h1 className="body-header">Where I'm Currently</h1>
                <div className="App-body">
                    <div className='logos'>
                        <img src={tLogo} alt='Thinkful' width='100px' height='100px'/>
                    </div>
                    <div>
                        <h2>Thinkful - Engineering Immersion</h2>
                        <p>I am currently enrolled in a fast-tracked, full time program of online classes, mentorship, and career coaching. </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Body;
