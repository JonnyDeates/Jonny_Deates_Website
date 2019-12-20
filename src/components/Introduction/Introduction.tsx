import React from 'react';
import './Introduction.css';
import logo from "../../assets/logos/yinyangyexin.png";

interface Props {
    introduction: string;
}

class Introduction extends React.Component<Props, {}> {
    descr: string = `I'm a front-end developer based in Denver, Colorado. I have a passion for web development and love seeing my projects come into fruition.`;

    render() {
        return (
            <div className='introduction'>
                <img  src={logo} alt='Yin Yang Yexin' width='150px' height='150px'/>
                <h2>{this.props.introduction}</h2>
                <p>{this.descr}</p>
            </div>
        );
    }
}

export default Introduction;
