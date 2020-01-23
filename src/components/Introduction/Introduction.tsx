import React from 'react';
import './Introduction.css';
import logo from "../../assets/logos/yinyangyexin.png";

interface Props {
    introduction: string;
}

class Introduction extends React.Component<Props, {}> {
    descr: string = `I'm a front-end developer based in Denver, Colorado. I have a passion for web development and love seeing my projects \n 
come into fruition. I also really enjoy building projects out in teams, and having those teams support me as I support \n
them! Currently developing out an full-stack application with a partner, and I can say the progress has been tremendous.`;

    render() {
        return (
            <div className='introduction'>
                <img src={''} />
                <h2>{this.props.introduction}</h2>
            </div>
        );
    }
}

export default Introduction;
