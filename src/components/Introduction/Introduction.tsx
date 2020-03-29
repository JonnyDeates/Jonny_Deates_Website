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
    descr: string = `I'm a front-end developer based in Denver, Colorado. I have a passion for web development and love seeing my projects \n 
come into fruition. I also really enjoy building projects out in teams, and having those teams support me as I support \n
them! Currently developing out a full-stack application with a partner, and I can say the progress has been tremendous.`;

    constructor(props: Props) {
        super(props);
        this.state =  {
            isRotating: false
        }
    }
    render() {
        let rotate: string = '2s 1s linear rotate infinite';
        return (
            <div className='introduction'>
                <img src={logo} alt='Yin Yang Yexin' style={{animation: this.state.isRotating ? rotate : '1s 1.5s expandIn forwards', opacity: this.state.isRotating ? 1 : 0}} onAnimationEnd={()=> this.setState({isRotating: true})}/>
                <h2>{this.props.introduction}</h2>
                <p>{this.descr}</p>
            </div>
        );
    }
}

export default Introduction;
