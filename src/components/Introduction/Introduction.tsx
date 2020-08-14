import React from 'react';
import './Introduction.css';
import logo from "../../assets/logos/yinyangyexin.png";

interface Props {
    introduction: string;
}

interface State {
    isRotating: boolean
}

class Introduction extends React.Component<Props, State> {
    descr: string = `I'm a full-stack developer based in Denver, Colorado. I am owner, designer, and sole contributor \n` +
        `to The Koi Foundation LLC. I have a strong passion for programming and love seeing my projects come into fruition. \n` +
        ` I am happily on a path of growth and rapid change!`;


    constructor(props: Props) {
        super(props);
        this.state = {
            isRotating: false
        }
    }

    render() {
        let rotate: string = '2s 1s linear rotate infinite';
        return (
            <div className='introduction'>
                <h2>{this.props.introduction}</h2>
                <p>{this.descr}</p>
                <img src={logo}
                     alt='Yin Yang Yexin' style={{
                    animation: this.state.isRotating ? rotate : '1s 1.5s expandIn forwards',
                    opacity: this.state.isRotating ? 1 : 0
                }} onAnimationEnd={() => this.setState({isRotating: true})}
                onClick={()=> window.open('https://www.koifoundation.com')}
                     title="Click to Goto The Koi Foundation"
                />
            </div>
        );
    }
}

export default Introduction;
