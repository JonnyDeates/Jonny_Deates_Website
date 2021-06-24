import React from 'react';
import './Introduction.css';
import logo from "../../Assets/logos/yinyangyexin.png";
import TrackVisibility from "../utils/TrackVisibility";

interface Props {
    introduction: string;
}

interface State {
    isRotating: boolean,
    runAnimation: boolean
}

class Introduction extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            isRotating: false,
            runAnimation: false
        }
    }

    render() {
        let rotate: string = '2s 1s linear rotate infinite';

        const koiFoundationLink: string = 'https://koifoundation.com'
        const companyHeader: string = "The Koi Foundation LLC"
        const companyInfo: string = "We strive to show a path that gives foundational knowledge and teachings as well as \n" +
            "to expand the world's access too needed informed, factual information. Currently with three webservices \n" +
            "available and more on the way, it will be the goto place for resources and self-improvement for all.";
        const descr: string = `I'm a Software Engineer located in Austin Texas, working at a major consulting firm called VMware. I am also owner, designer, and sole contributor \n` +
            `to The Koi Foundation LLC. I have a strong passion for programming and seeing my projects come into fruition. \n` +
            ` I am happily on a path of growth and rapid change and know my future is boundless!`;

        return (
            <div className='introduction'>
                <h2>{this.props.introduction}</h2>
                <p>{descr}</p>

                <TrackVisibility onVisible={()=>this.setState({runAnimation: true})}>
                    <img src={logo}
                         alt='Yin Yang Yexin' style={{
                        animation: this.state.runAnimation ? this.state.isRotating ? rotate : '1s .5s expandIn forwards' : '',
                        opacity: this.state.isRotating ? 1 : 0
                    }} onAnimationEnd={() => this.setState({isRotating: true})}
                         onClick={()=> window.open(koiFoundationLink)}
                         title="Click to Goto The Koi Foundation"
                    />
                    <h1 style={{animation: this.state.runAnimation ? '1s fadeIn forwards' : ''}}>{companyHeader}</h1>
                   <p style={{animation: this.state.runAnimation ? '1.5s slideInDown forwards' : ''}}> {companyInfo}</p>
                </TrackVisibility>
            </div>
        );
    }
}

export default Introduction;
