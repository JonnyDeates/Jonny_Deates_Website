import React from 'react';
import './Introduction.css';
import logo from "../../assets/logos/yinyangyexin.png";
import TrackVisibility from "../utils/TrackVisibility";

interface Props {
    introduction: string;
}

interface State {
    isRotating: boolean,
    runAnimation: boolean
}

class Introduction extends React.Component<Props, State> {
    descr: string = `I'm a full-stack developer based in Denver, Colorado. I am owner, designer, and sole contributor \n` +
        `to The Koi Foundation LLC. I have a strong passion for programming and love seeing my projects come into fruition. \n` +
        ` I am happily on a path of growth and rapid change!`;
    koiFoundationLink: string = 'https://koifoundation.com'

    constructor(props: Props) {
        super(props);
        this.state = {
            isRotating: false,
            runAnimation: false
        }
    }

    render() {
        let rotate: string = '2s 1s linear rotate infinite';
        const companyInfo: string = "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
            "to expand the world's access too needed informed, factual information. Currently with two webservices \n" +
            "available and another on the way, it will be the goto place for resources and self-improvement for all.";
        return (
            <div className='introduction'>
                <h2>{this.props.introduction}</h2>
                <p>{this.descr}</p>

                <TrackVisibility onVisible={()=>this.setState({runAnimation: true})}>
                    <img src={logo}
                         alt='Yin Yang Yexin' style={{
                        animation: this.state.runAnimation ? this.state.isRotating ? rotate : '1s .5s expandIn forwards' : '',
                        opacity: this.state.isRotating ? 1 : 0
                    }} onAnimationEnd={() => this.setState({isRotating: true})}
                         onClick={()=> window.open('https://www.koifoundation.com')}
                         title="Click to Goto The Koi Foundation"
                    />
                    <h1 style={{animation: this.state.runAnimation ? '1s fadeIn forwards' : ''}}>The Koi Foundation LLC</h1>
                   <p style={{animation: this.state.runAnimation ? '1.5s slideInDown forwards' : ''}}> {companyInfo}</p>
                </TrackVisibility>
            </div>
        );
    }
}

export default Introduction;
