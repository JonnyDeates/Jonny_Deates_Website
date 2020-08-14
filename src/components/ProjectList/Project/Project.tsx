import React from 'react';
import './Project.css';
import TrackVisibility from "../../utils/TrackVisibility";

// import clipboard from '../../../assets/logos/clipboard.png'
interface Props {
    image: string,
    link: string,
    githubLink: string,
    title: string,
    subTitle: string,
    descr: string,
    color: string,
    demoName: any,
    demoPass: any,
}

interface State {
    currentAnimation: string,
    runAnimationImg: boolean,
    runAnimationTitle: boolean,
    runAnimationSubTitle: boolean,
    runAnimationDesc: boolean,
    runAnimationLink: boolean
}

class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const animations: string[] = ['expandIn', 'slideInTop', 'slideInDown', 'fadeIn', 'slideInRight', 'slideInLeft'];
        this.state = {
            currentAnimation: animations[Math.floor(Math.random()*animations.length)],
            runAnimationImg: false,
            runAnimationTitle: false,
            runAnimationSubTitle: false,
            runAnimationDesc: false,
            runAnimationLink: false
        }
    }

    render() {
        return (
            <div className="project" style={{backgroundColor: this.props.color}}>
                <div>
                    <TrackVisibility onVisible={() => this.setState({runAnimationImg: true})}>
                        <img style={{animation: (this.state.runAnimationImg) ? '1s linear expandIn forwards' : ''}}
                             src={this.props.image} alt={this.props.title}/> </TrackVisibility>
                    <div className='project-content'>
                        <TrackVisibility onVisible={() => this.setState({runAnimationTitle: true})}>
                            <h2 style={{animation: (this.state.runAnimationTitle) ? `1s ${this.state.currentAnimation} forwards` : ''}}>{this.props.title}</h2>
                        </TrackVisibility>
                        <TrackVisibility onVisible={() => this.setState({runAnimationSubTitle: true})}>
                            <h4 style={{animation: (this.state.runAnimationSubTitle) ? `1s .25s ${this.state.currentAnimation} forwards` : ''}}>{this.props.subTitle}</h4>
                        </TrackVisibility>
                        <TrackVisibility onVisible={() => this.setState({runAnimationDesc: true})}>
                            <p style={{animation: (this.state.runAnimationDesc) ? `1s .5s ${this.state.currentAnimation} forwards` : ''}}>{this.props.descr}</p>
                        </TrackVisibility>
                    </div>
                    <TrackVisibility onVisible={() => this.setState({runAnimationLink: true})}>
                        <div className='project-submit' style={{animation: (this.state.runAnimationLink ? `1s .75s ${this.state.currentAnimation} forwards` : '')}}>
                            <p className='project-link'
                               onClick={() => window.open(this.props.link)}>View {this.props.title}</p>
                            {(this.props.githubLink !== '') ?
                            <p className='project-github' style={{backgroundColor: this.props.color + '55'}}
                               onClick={() => window.open(this.props.githubLink)}>Github</p> : ''}

                        </div>
                    </TrackVisibility>
                    {(this.props.demoName.length !== 0) ?
                        <div className='project-demo' title={'Demo Account Credentials'}>
                            <p>Username: <input type={'text'} defaultValue={this.props.demoName}/></p>
                            <p>Password: <input type={'text'} defaultValue={this.props.demoPass}/></p>
                        </div> : ''}

                </div>
            </div>

        );
    }
}

export default Project;
